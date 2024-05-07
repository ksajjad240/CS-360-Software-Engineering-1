import tkinter as tk
import subprocess
from tkinter import Button, Label, Frame

def run_script():
    # Runs the other_script.py Python script
    subprocess.run(["python", "Notification.py"])
    
def create_home_screen():
    # Create a new window
    window = tk.Tk()
    window.title("PAYTRAC Home")
    window.geometry("300x600")  # Width x Height
    window.configure(background='green')

    # Title Label
    title_label = Label(window, text="Home", bg='green', fg='white', font=('Arial', 20))
    title_label.pack(pady=(20, 20))  # padding y-axis

    # Function to create a button with specific settings
    def create_button(text):
        return Button(frame, text=text, bg='white', fg='black', height=2, width=15, command=run_script)

    # Frame to hold the buttons
    frame = Frame(window, bg='green')
    frame.pack(expand=True)

    # Creating buttons
    buttons = ['Budget', 'Subscription', 'Settings', 'Help', 'Notifications', 'Payments']
    button_widgets = [create_button(button_text) for button_text in buttons]

    # Layout the buttons in the frame
    for index, button in enumerate(button_widgets):
        button.grid(row=index // 2, column=index % 2, padx=10, pady=10)
        
    # Log out button
    logout_button = Button(window, text="Log out", bg='white', fg='black')
    logout_button.pack(pady=(10, 10))
        
    # Run the window loop
    window.mainloop()

# Call function to create the home screen window
create_home_screen()
