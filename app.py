from flask import Flask, render_template
import datetime

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html',
                         name="Аня",
                         age=11,
                         year=datetime.datetime.now().year,
                         classmate="Никита")

@app.route('/gift')
def gift():
    return render_template('gift.html', name="Аня", classmate="Никита")

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)