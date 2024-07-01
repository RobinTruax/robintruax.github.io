 # Imports
from PIL import Image, ImageDraw
import cmath
import math

# Function
def collatz_generalized(c, max): 
    n = 0
    while n<max: 
        try: 
            c = (7*c+2 - (5*c+2)*cmath.cos(math.pi*c))*0.25
            n += 1
        except OverflowError: 
            break
    return n

# Coloring
def color_blue(iterations): 
    if iterations == MAX_ITERATIONS: 
        return 0
    else: 
        x = pow(float(iterations)/float(MAX_ITERATIONS), 0.5)
        return int(-2650*x*x/21+6955*x/21+50)

# Input
VALID_INPUT = False
while not VALID_INPUT: 
    try: 
        #The size of the final generated image
        WIDTH = int(input("Width of generated image: "))
        HEIGHT = int(input("Height of generated image: "))

        #Finding the display window
        REAL_START = float(input("Start position of generated image (on the real axis): "))
        REAL_END = float(input("End position of generated image (on the real axis): "))
        IMAGINARY_START = float(input("Start position of generated image (on the imaginary axis): "))
        IMAGINARY_END = float(input("End position of generated image (on the imaginary axis): "))

        #The max iterations parameter
        MAX_ITERATIONS = int(input("How many iterations should be considered effectively infinite (recommended - 50): "))
        VALID_INPUT = True
    except: 
        VALID_INPUT = False

# Create image
final_image = Image.new('RGB', (WIDTH, HEIGHT), (0, 10, 60))

# Actual image
for x in range(0, WIDTH):
    # Progress report
    if(x % int(WIDTH/100) == 0): 
        print(str(float(x/WIDTH*100)) + " percent complete.")

    for y in range(0, HEIGHT):

        # Convert pixel coordinate to complex number
        c = complex(REAL_START + (x / WIDTH) * (REAL_END - REAL_START),
                    IMAGINARY_START + (y / HEIGHT) * (IMAGINARY_END - IMAGINARY_START))
        
        # Get the number of iterations
        iterations = collatz_generalized(c, MAX_ITERATIONS)
        
        # Draw the pixel, using my coloring algorithm
        ImageDraw.Draw(final_image).point([x, y], (0, 0, color_blue(iterations)))

# Display
print("100 percent complete.")
final_image.save('collatz' + str(WIDTH) + 'x' + str(HEIGHT) + '.png', 'PNG')