from flask import Flask, render_template    
import cv2
import cvzone
from cvzone.FaceMeshModule import FaceMeshDetector
import numpy as np

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/home.html')
def home():
    return render_template('home.html')

@app.route('/checklist.html')
def checklist():
    return render_template("checklist.html")

@app.route('/resources.html')
def resources():
    return render_template('resources.html')

@app.route('/camera-display/')
def camera():
    cap = cv2.VideoCapture(0)
    detector = FaceMeshDetector(maxFaces = 1)
    text = ""

    #calculates the distance of the user from their camera (in cm)
    def calc_distance(wpx):
        Wcm = 6.3
        d = 50
        f = (wpx * d)/ Wcm
        d = (Wcm * 620)/wpx

        return d

    while True:

        #face detector
        success, img = cap.read()
        img, faces = detector.findFaceMesh(img, draw = False)
        #creates another box that is similar size to the camera
        imgText = np.zeros_like(img)

        if faces:
            face = faces[0]
            #pinpointing location of the eyes
            pointLeft = face[145]
            pointRight = face[374]

            #finds the distance between the two eyes (in pixels)
            w, _ = detector.findDistance(pointLeft, pointRight)
            distance = calc_distance(w)

            if distance < 50:
                text = "You are too close to the screen!"
            else:
                text = "You are at a safe distance."

            #displays the distance the user is from their screen
            cvzone.putTextRect(img, f'Depth: {int(distance)}cm', (face[10][0] - 100, face[10][1] - 50), scale = 2)
            
            #displays + adjusts the text in the box
            singleHeight = 20
            cv2.putText(imgText, text, (50, 50 + (singleHeight)), cv2.FONT_ITALIC, 1, (255, 255, 255), 2)

            imgStacked = cvzone.stackImages([img, imgText], 2, 1)
            cv2.imshow("Image", imgStacked)
            cv2.waitKey(1)

@app.route('/about.html')
def about():
    return render_template('about.html')

if __name__ == "__main__":
    app.run(debug=True)