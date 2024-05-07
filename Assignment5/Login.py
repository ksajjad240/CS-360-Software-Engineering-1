import tkinter as tk
import subprocess
from tkinter import Entry, Label, Button

def run_script():
    # Runs the other_script.py Python script
    subprocess.run(["python", "Verification.py"])
    
def create_login_window():
    # Create a new window
    window = tk.Tk()
    window.title("PAYTRAC Login")
    window.geometry("300x600")  # Width x Height
    window.configure(background='green')

    # Title Label
    title_label = Label(window, text="PAYTRAC\nLogin", bg='blue', fg='white', font=('Arial', 16))
    title_label.pack(pady=(10, 20))  # padding y-axis

    # Username Entry
    username_label = Label(window, text="Username", bg='green', fg='white')
    username_label.pack()
    username_entry = Entry(window, bd=1)
    username_entry.pack(pady=(0, 10))

    # Password Entry
    password_label = Label(window, text="Password", bg='green', fg='white')
    password_label.pack()
    password_entry = Entry(window, bd=1, show='*')
    password_entry.pack(pady=(0, 10))

    # Login Button
    login_button = Button(window, text="Sign in", bg='white', fg='black', command=run_script)
    login_button.pack(pady=(5, 10))

    # Run the window loop
    window.mainloop()

# Call function to create the login window
create_login_window()
