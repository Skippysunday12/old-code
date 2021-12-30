#This is a calculator, and the first couple lines in the loop are introductory. 
#The library below intoduces the square root function
from math import sqrt
print("Welcome to this calculator! Your options are add, subtract, multipy, divide, exponent, quit, and square root(sqrt)")
print("If you would like to do a sqrt, when the computer prompts you to enter a number, just enter 0")
while True:
	try:
		#Ask for numbers and operation
		num1 = input ("What is your first number?")
		num2 = input ("What is your second number?")
		op = input ("What do you want to do?")
	except ValueError:
		print("Sorry, but those are invalid inputs!")
		continue
	#add
	if (op == 'add'):
		print(int(num1)+int(num2))
	#subtract
	elif (op == 'subtract'):
		print(int(num1)-int(num2))
	#multiply
	elif (op == 'multiply'):
		print(int(num1)*int(num2))
	#divide
	elif (op == 'divide'):
		try:
			print(int(num1)/int(num2))
		except ZeroDivisionError:
			print ("You cant divide by zero, sorry!")
			continue
	#exponent
	elif (op == 'exponent'):
		print(int(num1)**int(num2))
	#sqaure root
	elif (op == 'sqrt'):
		print(sqrt(int(num1)))
	elif (op == 'quit'):
		print("Byebye!")
		break
	else:
		print("Invalid operation!")