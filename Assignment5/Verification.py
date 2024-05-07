import tkinter as tk
import subprocess
from tkinter import Label, Entry, Button

def run_script():
    # Runs the other_script.py Python script
    subprocess.run(["python", "HomeScreen.py"])
    
def create_verification_window():
    # Create a new window
    window = tk.Tk()
    window.title("Verify Your Account")
    window.geometry("300x600")  # Width x Height
    window.configure(background='green')

    # Header label
    header_label = Label(window, text="PAYTRAC", bg='blue', fg='white', font=('Arial', 16))
    header_label.pack(pady=(10, 5))  # padding y-axis

    # Information text
    info_text = "A confirmation code has been sent to your email address to verify your account."
    info_label = Label(window, text=info_text, wraplength=280, bg='green', fg='white')
    info_label.pack(pady=(10, 20))

    # Entry for code
    code_entry = Entry(window, bd=2, width=25)
    code_entry.pack()

    # Verify button
    verify_button = Button(window, text="Verify", bg='white', fg='black', command=run_script)
    verify_button.pack(pady=(10, 10))

    # Run the window loop
    window.mainloop()

# Call function to create the verification window
create_verification_window()
