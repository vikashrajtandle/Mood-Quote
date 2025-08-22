from flask import Flask, render_template, request, redirect, url_for
import mysql.connector

app= Flask(__name__)

DB_config={
    'host':'localhost',
    'user':'root',
    'password':'tvikashraj@9502776125',
    'database': 'myapp'

}

def get_quote(mood, level):
    connection= mysql.connector.connect(**DB_config)
    cursor= connection.cursor()
    query= "SELECT quotes FROM quotes WHERE mood=%s AND level=%s"
    cursor.execute(query,(mood,level))
    result=cursor.fetchone()
    connection.close()

    return result[0] if result else "NO DATA FOUND"

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        mood= request.form.get('mood')
        return redirect(url_for('level', mood=mood.lower()))
    return render_template('index.html')

@app.route('/level/<mood>',methods=['GET','POST'])
def level(mood):
    if request.method=='POST':
        level= int(request.form.get('level'))
        return redirect(url_for('quote', mood=mood, level=level))
    return render_template('level.html', mood=mood)

@app.route('/quote/<mood>/<int:level>')
def quote(mood, level):
    selected_quote=get_quote(mood, level)
    return render_template('quote.html', quote=selected_quote, mood=mood, level=level)

if __name__ == "__main__":
    app.run(debug=True)