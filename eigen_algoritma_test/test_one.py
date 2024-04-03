def reverse_input(write):
    text_part = ""
    number_part = ""
    for char in write:
        if char.isdigit():
            number_part += char
        else:
            text_part += char
    reversed_text = text_part[::-1]
    return reversed_text + number_part

reversed_write = reverse_input("write5")
print(reversed_write)
