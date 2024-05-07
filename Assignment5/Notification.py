import tkinter as tk
import calendar
from tkinter import Label, Button, Frame

def create_payment_calendar():
    window = tk.Tk()
    window.title("PAYTRAC Calendar")
    window.geometry("300x600")  # Width x Height
    window.configure(background='green')

    # Calendar title
    calendar_title = Label(window, text="Payment Calendar", bg='green', fg='white', font=('Arial', 10))
    calendar_title.pack(pady=(10, 10))

    # Month Navigation
    nav_frame = Frame(window, bg='green')
    nav_frame.pack(pady=(10, 10))

    prev_button = Button(nav_frame, text="<", bg='white', fg='black')
    prev_button.pack(side=tk.LEFT, padx=(10, 10))

    month_label = Label(nav_frame, text="March 2024", bg='green', fg='white')
    month_label.pack(side=tk.LEFT)

    next_button = Button(nav_frame, text=">", bg='white', fg='black')
    next_button.pack(side=tk.LEFT, padx=(10, 10))

    # Calendar days
    days_frame = Frame(window, bg='green')
    days_frame.pack()

    days = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"]
    for day in days:
        Label(days_frame, text=day, bg='green', fg='white', width=10).grid(row=0, column=days.index(day))

    # Days in the month
    year, month = 2024, 3  # March 2024
    month_days = calendar.monthrange(year, month)[1]
    start_day = calendar.monthrange(year, month)[0]

    for i in range(month_days):
        day = i + 1
        row = (start_day + i) // 7 + 1
        col = (start_day + i) % 7
        Button(days_frame, text=str(day), bg='white', fg='black', width=5).grid(row=row, column=col, pady=(2, 2))

    # Back Button
    back_button = Button(window, text="Back", bg='white', fg='black')
    back_button.pack(pady=(10, 10))

    # Run the window loop
    window.mainloop()

create_payment_calendar()
