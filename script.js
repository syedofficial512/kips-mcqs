/* script.js */

// --- DATA STORE ---
const db = {
    math: {
        easy: [
        { q: "If x² − 9 = 0, then what is the value of x?", o: ["3", "-3", "±3", "9"], a: 2 },
        { q: "What is the value of sin 30°?", o: ["1", "√3/2", "1/2", "0"], a: 2 },
        { q: "What is the HCF of 24 and 36?", o: ["6", "12", "18", "24"], a: 1 },
        { q: "If log₁₀x = 2, what is x?", o: ["10", "20", "100", "2"], a: 2 },
        { q: "The distance between points (0,0) and (3,4) is:", o: ["5", "7", "4", "3"], a: 0 },
        { q: "The approximate value of π is:", o: ["3", "3.14", "22/5", "22/7"], a: 1 },
        { q: "If a:b = 2:3, then what is a/b?", o: ["2/3", "3/2", "5", "1"], a: 0 },
        { q: "A straight line angle equals:", o: ["90°", "180°", "360°", "45°"], a: 1 },
        { q: "Simplify: x³ × x²", o: ["x⁵", "x⁶", "x", "x⁴"], a: 0 },
        { q: "What is the mean of 2, 4, 6?", o: ["3", "4", "5", "6"], a: 1 },
        { q: "Complementary angles sum to:", o: ["180°", "360°", "90°", "45°"], a: 2 },
        { q: "What is the value of tan 45°?", o: ["0", "√3", "1", "1/2"], a: 2 },
        { q: "The simple interest formula is:", o: ["PRT/100", "P+RT", "PR/T", "PT/R"], a: 0 },
        { q: "What is the square root of 144?", o: ["10", "11", "12", "13"], a: 2 },
        { q: "The formula for the area of a circle is:", o: ["2πr", "πr²", "πd", "r²"], a: 1 },
        { q: "If a = 5, then a² = ?", o: ["10", "20", "15", "25"], a: 3 },
        { q: "A linear equation has a power of x equal to:", o: ["0", "1", "2", "3"], a: 1 },
        { q: "The range of probability is:", o: ["0–2", "-1 to 1", "0–1", "1–2"], a: 2 },
        { q: "What is the value of cos 60°?", o: ["1", "0", "1/2", "√3/2"], a: 2 },
        { q: "The perimeter of a square is:", o: ["a", "2a", "3a", "4a"], a: 3 },
        { q: "If 3x = 12, then x = ?", o: ["2", "3", "4", "6"], a: 2 },
        { q: "Area of a square with side 7 cm is:", o: ["14 cm²", "21 cm²", "28 cm²", "49 cm²"], a: 3 },
        { q: "Which of the following is a rational number?", o: ["√2", "√3", "π", "5/7"], a: 3 },
        { q: "The value of (-2)² is:", o: ["-4", "4", "-2", "2"], a: 1 },
        { q: "LCM of 6 and 8 is:", o: ["12", "16", "18", "24"], a: 3 },
        { q: "If angle A = 40°, its complement is:", o: ["40°", "50°", "60°", "140°"], a: 1 },
        { q: "The graph of a linear equation is a:", o: ["Circle", "Parabola", "Straight line", "Hyperbola"], a: 2 },
        { q: "The value of 5⁰ is:", o: ["0", "1", "5", "Undefined"], a: 1 },
        { q: "Volume of a cube with side 'a' is:", o: ["a²", "6a²", "a³", "4a³"], a: 2 },
        { q: "If x = 2, then 2x² = ?", o: ["4", "6", "8", "10"], a: 2 },
        { q: "A triangle with all sides equal is called:", o: ["Scalene", "Isosceles", "Right-angled", "Equilateral"], a: 3 },
        { q: "Value of sin 90° is:", o: ["0", "1/2", "√3/2", "1"], a: 3 },
        { q: "Median of 3, 7, 9 is:", o: ["3", "7", "9", "6"], a: 1 },
        { q: "Perpendicular lines form an angle of:", o: ["45°", "60°", "90°", "120°"], a: 2 },
        { q: "If perimeter of square is 20 cm, side length is:", o: ["4 cm", "5 cm", "6 cm", "10 cm"], a: 1 },
        { q: "The reciprocal of 5 is:", o: ["5", "-5", "1/5", "-1/5"], a: 2 },
        { q: "If a line intersects two parallel lines, corresponding angles are:", o: ["Equal", "Supplementary", "Complementary", "Unequal"], a: 0 },
        { q: "Probability of a sure event is:", o: ["0", "1", "1/2", "-1"], a: 1 },
        { q: "Which is an irrational number?", o: ["2", "0.5", "3/4", "√7"], a: 3 },
        { q: "Value of cos 0° is:", o: ["0", "1", "-1", "1/2"], a: 1 },
        { q: "The sum of angles of a triangle is:", o: ["90°", "180°", "270°", "360°"], a: 1 },
        { q: "A factor of any number is always:", o: ["Greater", "Equal", "Smaller or equal", "Negative"], a: 2 },
        { q: "The smallest prime number is:", o: ["0", "1", "2", "3"], a: 2 },
        { q: "If radius of circle is r, diameter is:", o: ["r", "r²", "2r", "πr"], a: 2 },
        { q: "Mean proportional between a and b is:", o: ["a + b", "ab", "√ab", "a/b"], a: 2 },
        { q: "If x + 5 = 9, x = ?", o: ["3", "4", "5", "6"], a: 1 },
        { q: "A number divisible by 10 must end with:", o: ["1", "2", "5", "0"], a: 3 },
        { q: "Value of √81 is:", o: ["7", "8", "9", "10"], a: 2 },
        { q: "The coordinate of origin is:", o: ["(1,1)", "(0,1)", "(1,0)", "(0,0)"], a: 3 },
        { q: "If angles are equal and sides proportional, triangles are:", o: ["Congruent", "Similar", "Right-angled", "Scalene"], a: 1 },
        { q: "If x = −2, value of x² is:", o: ["−4", "4", "−2", "2"], a: 1 },
        { q: "sin²30° + cos²30° = ?", o: ["1", "0", "1/2", "2"], a: 0 },
        { q: "Reciprocal of 5/7 is:", o: ["5/7", "7/5", "12/7", "1"], a: 1 },
        { q: "Volume of cube = ?", o: ["a²", "6a²", "a³", "4a³"], a: 2 },
        { q: "Value of tan 0° is:", o: ["1", "0", "∞", "−1"], a: 1 },
        { q: "If a − b = 0, then:", o: ["a > b", "a < b", "a = b", "a ≠ b"], a: 2 },
        { q: "Angle of equilateral triangle is:", o: ["45°", "90°", "60°", "120°"], a: 2 },
        { q: "√81 = ?", o: ["8", "9", "−9", "7"], a: 1 },
        { q: "Mean proportional between 4 and 16 is:", o: ["6", "8", "10", "12"], a: 1 },
        { q: "Value of π/2 radians in degrees:", o: ["45°", "60°", "90°", "180°"], a: 2 },
        { q: "If x:y = 4:5, x = ?", o: ["4", "5", "4k", "5k"], a: 2 },
        { q: "Area of rectangle = ?", o: ["l + w", "2(l + w)", "l × w", "l²"], a: 2 },
        { q: "Value of 2⁰ is:", o: ["0", "1", "2", "−1"], a: 1 },
        { q: "Probability of impossible event is:", o: ["1", "0", "1/2", "−1"], a: 1 },
        { q: "Linear pair angles sum to:", o: ["90°", "180°", "360°", "60°"], a: 1 },
        { q: "(a³)² = ?", o: ["a⁵", "a⁶", "a³", "a⁹"], a: 1 },
        { q: "Median of 1,3,5 is:", o: ["1", "3", "5", "4"], a: 1 },
        { q: "If a:b = 1:1 then:", o: ["a>b", "a<b", "a=b", "a≠b"], a: 2 },
        { q: "Distance formula uses:", o: ["Pythagoras theorem", "Area theorem", "Ratio", "Probability"], a: 0 },
        { q: "Square has sides:", o: ["Equal", "Unequal", "Parallel only", "Curved"], a: 0 }
        ],
        medium: [
            { q: "If x − 5 = 0, then x =", o: ["−5", "0", "5", "10"], a: 2 },
            { q: "Value of cos 0° is:", o: ["0", "1", "−1", "1/2"], a: 1 },
            { q: "If a = 3, b = 4, then √(a² + b²) =", o: ["5", "6", "7", "25"], a: 0 },
            { q: "(2x)² =", o: ["2x²", "4x", "4x²", "x²"], a: 2 },
            { q: "LCM of 6 and 8 is:", o: ["12", "24", "48", "16"], a: 1 },
            { q: "Value of tan 45° + cos 60° is:", o: ["1", "3/2", "1/2", "2"], a: 1 },
            { q: "Perimeter of rectangle is:", o: ["lw", "2l + w", "2(l + w)", "l²"], a: 2 },
            { q: "If x² = 16, then x =", o: ["4", "−4", "±4", "8"], a: 2 },
            { q: "Mean of first 5 natural numbers is:", o: ["2", "3", "4", "5"], a: 1 },
            { q: "sin 90° − cos 0° =", o: ["0", "1", "−1", "2"], a: 0 },
            { q: "If a:b = 3:5, then b/a =", o: ["3/5", "5/3", "8", "2"], a: 1 },
            { q: "Area of square with side 6 cm:", o: ["12", "24", "36", "48"], a: 2 },
            { q: "Value of 5³ is:", o: ["15", "25", "125", "625"], a: 2 },
            { q: "Probability of sure event is:", o: ["0", "1", "1/2", "−1"], a: 1 },
            { q: "If y = 2x and x = 3, y =", o: ["3", "5", "6", "9"], a: 2 },
            { q: "Angle between perpendicular lines is:", o: ["0°", "45°", "90°", "180°"], a: 2 },
            { q: "Value of log₁₀100 is:", o: ["1", "2", "10", "100"], a: 1 },
            { q: "Cube root of 27 is:", o: ["9", "3", "−3", "81"], a: 1 },
            { q: "A triangle has how many medians?", o: ["1", "2", "3", "6"], a: 2 },
            { q: "sin 30° + cos 60° =", o: ["1", "1/2", "3/2", "2"], a: 0 },
            { q: "If a² − b² = 0, then:", o: ["a ≠ b", "a = b", "a > b", "a < b"], a: 1 },
            { q: "Volume of cylinder =", o: ["πr²h", "2πrh", "πd", "r²h"], a: 0 },
            { q: "If 3x = 15, x =", o: ["3", "4", "5", "15"], a: 2 },
            { q: "Supplementary angles sum to:", o: ["90°", "180°", "360°", "45°"], a: 1 },
            { q: "Value of cos 90° is:", o: ["1", "−1", "0", "1/2"], a: 2 },
            { q: "If radius doubles, area becomes:", o: ["Double", "Triple", "Four times", "Half"], a: 2 },
            { q: "√(49/64) =", o: ["7/8", "8/7", "49/64", "14/8"], a: 0 },
            { q: "If a + b = 0, then b =", o: ["a", "−a", "a²", "0"], a: 1 },
            { q: "Number of diagonals in square:", o: ["1", "2", "3", "4"], a: 1 },
            { q: "If x/y = 2/3 and y = 6, x =", o: ["2", "3", "4", "6"], a: 2 },
            { q: "Value of (−3)² is:", o: ["−9", "9", "6", "−6"], a: 1 },
            { q: "Formula of slope is:", o: ["x₁−x₂ / y₁−y₂", "y₂−y₁ / x₂−x₁", "x₂−x₁ / y₂−y₁", "y₁+y₂"], a: 1 },
            { q: "If x³ = 8, x =", o: ["2", "−2", "±2", "4"], a: 0 },
            { q: "Average of 4, 8, 12 is:", o: ["6", "8", "10", "12"], a: 1 },
            { q: "Area of triangle =", o: ["bh", "½bh", "2bh", "b²"], a: 1 },
            { q: "If a:b = 5:1, then a − b =", o: ["4", "5", "6", "Depends on value"], a: 3 },
            { q: "Value of tan 60° is:", o: ["1", "√3", "1/√3", "0"], a: 1 },
            { q: "If x = 0, x³ =", o: ["0", "1", "Undefined", "−1"], a: 0 },
            { q: "Quadrilateral has angles sum:", o: ["180°", "270°", "360°", "450°"], a: 2 },
            { q: "If log₁₀x = 1, x =", o: ["1", "10", "100", "0"], a: 1 },
            { q: "Value of 7⁰ is:", o: ["0", "1", "7", "Undefined"], a: 1 },
            { q: "If a = −4, |a| =", o: ["−4", "0", "4", "8"], a: 2 },
            { q: "Distance between (0,0) and (0,5):", o: ["0", "5", "√5", "25"], a: 1 },
            { q: "If x = y, then x/y =", o: ["0", "1", "−1", "Undefined"], a: 1 },
            { q: "Ratio of areas of similar figures is:", o: ["Same", "Square of ratio", "Cube of ratio", "Double"], a: 1 },
            { q: "If sin θ = 0, θ =", o: ["0°", "30°", "45°", "60°"], a: 0 },
            { q: "Probability range is:", o: ["−1 to 1", "0 to 1", "1 to 2", "Any real number"], a: 1 },
            { q: "Number of sides in decagon:", o: ["8", "9", "10", "12"], a: 2 },
            { q: "If a² = 1, then a =", o: ["1", "−1", "±1", "0"], a: 2 },
            { q: "Value of cos 60° − sin 30° =", o: ["0", "1", "1/2", "−1"], a: 0 },
            { q: "Median divides triangle into:", o: ["2 equal areas", "3 equal areas", "4 equal areas", "6 equal areas"], a: 0 },
            { q: "Value of (½)² is:", o: ["1/2", "1/4", "2", "4"], a: 1 },
            { q: "If perimeter of square is 20, side =", o: ["4", "5", "10", "20"], a: 1 },
            { q: "Complement of 30° is:", o: ["30°", "45°", "60°", "90°"], a: 2 },
            { q: "If a = 2, b = −3, a + b =", o: ["−5", "−1", "1", "5"], a: 1 },
            { q: "Number of roots of quadratic equation:", o: ["1", "2", "3", "Infinite"], a: 1 },
            { q: "√0 =", o: ["0", "1", "Undefined", "−1"], a: 0 },
            { q: "If x = 1/x, then x =", o: ["1", "−1", "±1", "0"], a: 2 },
            { q: "Angle sum of triangle is:", o: ["90°", "180°", "270°", "360°"], a: 1 },
            { q: "Value of sin 0° is:", o: ["1", "−1", "0", "1/2"], a: 2 },
            { q: "If a:b = 7:7 then a =", o: ["b", "7", "1", "0"], a: 0 },
            { q: "Area of semicircle =", o: ["πr²", "½πr²", "2πr", "πr"], a: 1 },
            { q: "Value of 10² is:", o: ["10", "20", "100", "1000"], a: 2 },
            { q: "If y varies directly with x, y/x =", o: ["Constant", "Variable", "Zero", "Infinite"], a: 0 },
            { q: "Hypotenuse is longest side in:", o: ["Isosceles triangle", "Scalene triangle", "Right triangle", "Equilateral triangle"], a: 2 },
            { q: "If a > b, then a − b is:", o: ["Negative", "Zero", "Positive", "Undefined"], a: 2 },
            { q: "Number of vertices in cube:", o: ["6", "8", "10", "12"], a: 1 },
            { q: "If x² < 0, then x is:", o: ["Real", "Imaginary", "Rational", "Integer"], a: 1 },
            { q: "cos θ = sin θ when θ =", o: ["30°", "45°", "60°", "90°"], a: 1 },
            { q: "Mean proportional between a and b is:", o: ["(a+b)/2", "√ab", "ab", "a/b"], a: 1 }
        ],
        hard: [
            { q: "If x + 1/x = 2, x =", o: ["0", "1", "−1", "2"], a: 1 },
            { q: "Discriminant of x² − 4x + 4 = 0 is:", o: ["0", "4", "16", "−4"], a: 0 },
            { q: "If sin θ = 1, θ =", o: ["0°", "30°", "90°", "180°"], a: 2 },
            { q: "If a³ = b³, then:", o: ["a ≠ b", "a = b", "a > b", "a < b"], a: 1 },
            { q: "Roots of x² = 9 are:", o: ["3", "−3", "±3", "9"], a: 2 },
            { q: "If log₁₀(x²) = 2, x =", o: ["10", "−10", "±10", "100"], a: 2 },
            { q: "If tan θ = 1, θ =", o: ["30°", "45°", "60°", "90°"], a: 1 },
            { q: "If a:b = 2:5, then a²:b² =", o: ["2:5", "4:25", "5:2", "25:4"], a: 1 },
            { q: "If x³ − 1 = 0, real root is:", o: ["1", "−1", "0", "3"], a: 0 },
            { q: "If sin²θ + cos²θ =", o: ["0", "1", "2", "1/2"], a: 1 },
            { q: "If x/y = y/x, then:", o: ["x = y", "x = −y", "x² = y²", "x = 0"], a: 2 },
            { q: "Maximum value of sin θ is:", o: ["0", "1", "−1", "∞"], a: 1 },
            { q: "If roots are equal, discriminant is:", o: ["Positive", "Negative", "Zero", "Infinite"], a: 2 },
            { q: "If a = b = c, triangle is:", o: ["Scalene", "Isosceles", "Equilateral", "Right"], a: 2 },
            { q: "If x² + 1 = 0, x is:", o: ["Integer", "Rational", "Real", "Imaginary"], a: 3 },
            { q: "If θ is acute, cos θ is:", o: ["Negative", "Zero", "Positive", "Undefined"], a: 2 },
            { q: "If a/b = b/a, then:", o: ["a = b", "a² = b²", "a = 0", "b = 0"], a: 1 },
            { q: "If x² > 0, x is:", o: ["Zero", "Always positive", "Non-zero real", "Imaginary"], a: 2 },
            { q: "If tan θ = 0, θ =", o: ["0°", "45°", "60°", "90°"], a: 0 },
            { q: "If a⁰ + b⁰ =", o: ["0", "1", "2", "a + b"], a: 2 },
            { q: "If roots are −2 and 3, equation is:", o: ["x² + x − 6 = 0", "x² − x − 6 = 0", "x² − x + 6 = 0", "x² + x + 6 = 0"], a: 1 },
            { q: "If x² − 5x + 6 = 0, roots are:", o: ["1,6", "2,3", "−2,−3", "3,6"], a: 1 },
            { q: "If sin θ = cos θ, θ =", o: ["30°", "45°", "60°", "90°"], a: 1 },
            { q: "If |x| = x, then x is:", o: ["Negative", "Zero", "Positive or zero", "Imaginary"], a: 2 },
            { q: "If |x| = −x, then x is:", o: ["Positive", "Negative or zero", "Zero only", "Imaginary"], a: 1 },
            { q: "If log₁₀1 =", o: ["0", "1", "−1", "Undefined"], a: 0 },
            { q: "If tan θ undefined, θ =", o: ["0°", "45°", "90°", "180°"], a: 2 },
            { q: "If a² = b², then:", o: ["a = b", "a = −b", "a = ±b", "a > b"], a: 2 },
            { q: "Maximum value of cos θ is:", o: ["−1", "0", "1", "∞"], a: 2 },
            { q: "If x³ = −8, x =", o: ["2", "−2", "±2", "8"], a: 1 },
            { q: "If x + 1/x = 5, find x² + 1/x²:", o: ["23", "21", "25", "27"], a: 0 },
            { q: "If determinant of matrix is zero, matrix is:", o: ["Identity", "Scalar", "Singular", "Square"], a: 2 },
            { q: "Roots of quadratic equation are real if discriminant is:", o: ["< 0", "= 0", "> 0", "≥ 0"], a: 3 },
            { q: "If sin θ = 1, θ equals:", o: ["0°", "30°", "60°", "90°"], a: 3 },
            { q: "Distance formula is derived from:", o: ["Pythagoras theorem", "Similar triangles", "Trigonometry", "Algebra"], a: 0 },
            { q: "If log a + log b = log 20 and a = 4, b = ?", o: ["4", "5", "10", "20"], a: 1 },
            { q: "A die is thrown, probability of getting odd number is:", o: ["1/2", "1/3", "2/3", "1/6"], a: 0 },
            { q: "Volume of cube with side a is:", o: ["3a", "a²", "a³", "6a²"], a: 2 },
            { q: "Graph of linear equation is:", o: ["Curve", "Circle", "Straight line", "Parabola"], a: 2 },
            { q: "If A = {1,2,3} then number of subsets is:", o: ["3", "6", "8", "9"], a: 2 },
            { q: "A quadratic equation has maximum roots equal to:", o: ["1", "2", "3", "Infinite"], a: 1 },
            { q: "Value of sec 60° is:", o: ["½", "1", "√3", "2"], a: 3 },
            { q: "If radius of circle is doubled, area becomes:", o: ["Same", "Double", "Four times", "Half"], a: 2 },
            { q: "If mean of 5 observations is 10, sum is:", o: ["50", "10", "5", "25"], a: 0 },
            { q: "Zero of linear polynomial is obtained by:", o: ["Graph", "Table", "Formula", "Guess"], a: 2 },
            { q: "If angles of triangle are in ratio 2:3:4, smallest angle is:", o: ["20°", "30°", "40°", "60°"], a: 2 },
            { q: "Equation x² − 7x + 10 = 0 has roots:", o: ["1,10", "2,5", "−2,−5", "3,4"], a: 1 },
            { q: "If a ≠ 0, equation ax = 0 gives x =", o: ["a", "1", "0", "Undefined"], a: 2 },
            { q: "Length of hypotenuse if sides are 5 and 12 is:", o: ["13", "17", "10", "15"], a: 0 }
        ]
    },
    physics: {
        easy: [
        { q: "The SI unit of force is:", o: ["Joule", "Newton", "Watt", "Pascal"], a: 1 },
        { q: "Formula for Speed is:", o: ["Distance × Time", "Distance / Time", "Time / Distance", "Acceleration"], a: 1 },
        { q: "Unit of electric current:", o: ["Volt", "Ohm", "Ampere", "Watt"], a: 2 },
        { q: "Motion with constant speed is called:", o: ["Random", "Uniform", "Non-uniform", "Circular"], a: 1 },
        { q: "Acceleration due to gravity is approx:", o: ["5 m/s²", "9.8 m/s²", "10 km/s", "98 m/s"], a: 1 },
        { q: "Energy of motion is called:", o: ["Potential", "Heat", "Kinetic", "Sound"], a: 2 },
        { q: "The unit of work is:", o: ["Newton", "Joule", "Watt", "Pascal"], a: 1 },
        { q: "Which is a scalar quantity?", o: ["Velocity", "Force", "Acceleration", "Speed"], a: 3 },
        { q: "Formula for Pressure is:", o: ["Force × Area", "Force / Area", "Area / Force", "Mass × Force"], a: 1 },
        { q: "Mirror used in vehicles for rear view:", o: ["Concave", "Convex", "Plane", "Cylindrical"], a: 1 },
        { q: "Unit of power is:", o: ["Joule", "Newton", "Watt", "Pascal"], a: 2 },
        { q: "Speed with direction is called:", o: ["Distance", "Velocity", "Acceleration", "Momentum"], a: 1 },
        { q: "Which quantity has both magnitude and direction?", o: ["Speed", "Mass", "Time", "Velocity"], a: 3 },
        { q: "Formula of acceleration is:", o: ["v × t", "v / t", "(v − u) / t", "u + v"], a: 2 },
        { q: "Unit of momentum is:", o: ["kg", "m/s", "kg m/s", "N/m"], a: 2 },
        { q: "Which law explains action and reaction?", o: ["Newton’s 1st", "Newton’s 2nd", "Newton’s 3rd", "Inertia"], a: 2 },
        { q: "Friction always acts in which direction?", o: ["Of motion", "Opposite to motion", "Vertical", "Circular"], a: 1 },
        { q: "SI unit of pressure is:", o: ["Newton", "Joule", "Pascal", "Watt"], a: 2 },
        { q: "Which form of energy is stored in a stretched spring?", o: ["Kinetic", "Heat", "Electrical", "Potential"], a: 3 },
        { q: "Device that converts electrical energy into mechanical energy:", o: ["Generator", "Transformer", "Electric motor", "Battery"], a: 2 },
        { q: "Image formed by a plane mirror is:", o: ["Real", "Inverted", "Smaller", "Virtual"], a: 3 },
        { q: "Speed of light in vacuum is approx:", o: ["3 × 10⁶ m/s", "3 × 10⁷ m/s", "3 × 10⁸ m/s", "3 × 10⁹ m/s"], a: 2 },
        { q: "Which mirror can form a real image?", o: ["Plane", "Convex", "Concave", "Cylindrical"], a: 2 },
        { q: "Loudness of sound depends on:", o: ["Frequency", "Wavelength", "Amplitude", "Speed"], a: 2 },
        { q: "Unit of frequency is:", o: ["m/s", "Hertz", "Joule", "Newton"], a: 1 },
        { q: "Echo is due to:", o: ["Refraction", "Reflection", "Diffraction", "Interference"], a: 1 },
        { q: "Heat transfer without medium occurs by:", o: ["Conduction", "Convection", "Radiation", "Evaporation"], a: 2 },
        { q: "Which metal is a good conductor of electricity?", o: ["Plastic", "Rubber", "Glass", "Copper"], a: 3 },
        { q: "Unit of electric charge is:", o: ["Ampere", "Volt", "Coulomb", "Ohm"], a: 2 },
        { q: "Ohm’s law relates:", o: ["V, I, R", "P, E, T", "F, m, a", "Q, t, I"], a: 0 },
        { q: "The device used to measure electric current:", o: ["Voltmeter", "Galvanometer", "Ammeter", "Ohmmeter"], a: 2 },
        { q: "SI unit of resistance is:", o: ["Ampere", "Volt", "Ohm", "Watt"], a: 2 },
        { q: "Magnetic poles always exist in:", o: ["Single", "Pairs", "Triple", "Groups"], a: 1 },
        { q: "North pole of magnet attracts:", o: ["North pole", "South pole", "Neutral object", "Electric charge"], a: 1 },
        { q: "Transformer works on principle of:", o: ["Ohm’s law", "Electrolysis", "Electromagnetic induction", "Static electricity"], a: 2 },
        { q: "Unit of electric potential difference:", o: ["Ampere", "Ohm", "Volt", "Coulomb"], a: 2 },
        { q: "Which radiation has highest energy?", o: ["Infrared", "Visible", "Ultraviolet", "X-rays"], a: 3 },
        { q: "The nucleus contains:", o: ["Electrons", "Protons only", "Neutrons only", "Protons and neutrons"], a: 3 },
        { q: "Charge on electron is:", o: ["Positive", "Neutral", "Negative", "Variable"], a: 2 },
        { q: "Atomic number represents number of:", o: ["Neutrons", "Protons", "Nucleons", "Ions"], a: 1 },
        { q: "Energy stored in fuel is:", o: ["Kinetic", "Heat", "Chemical", "Nuclear"], a: 2 },
        { q: "Which quantity remains conserved in collisions?", o: ["Velocity", "Force", "Momentum", "Acceleration"], a: 2 },
        { q: "Simple machine used to lift heavy loads:", o: ["Thermometer", "Lever", "Barometer", "Microscope"], a: 1 },
        { q: "Unit of density is:", o: ["kg", "m³", "kg/m³", "g"], a: 2 },
        { q: "Formula for Density is:", o: ["Mass × Volume", "Mass / Volume", "Volume / Mass", "Weight × Volume"], a: 1 },
        { q: "A body at rest has kinetic energy equal to:", o: ["1 J", "Maximum", "Zero", "Negative"], a: 2 },
        { q: "Which wave does not need a medium?", o: ["Sound", "Water", "Mechanical", "Electromagnetic"], a: 3 },
        { q: "Fuse is used to:", o: ["Increase current", "Store charge", "Prevent shock", "Break circuit on overload"], a: 3 },
        { q: "Solar energy is converted into electrical energy by:", o: ["Generator", "Dynamo", "Solar cell", "Turbine"], a: 2 },
        { q: "Weight depends on:", o: ["Mass only", "Volume only", "Gravity", "Density"], a: 2 },
        { q: "SI unit of power:", o: ["Joule", "Watt", "Newton", "Volt"], a: 1 },
        { q: "Speed of light is approx:", o: ["3×10⁶ m/s", "3×10⁸ m/s", "3×10⁴ m/s", "3×10² m/s"], a: 1 },
        { q: "Which is vector quantity?", o: ["Speed", "Mass", "Force", "Energy"], a: 2 },
        { q: "Work done is zero when angle is:", o: ["0°", "45°", "90°", "180°"], a: 2 },
        { q: "Unit of pressure:", o: ["Pascal", "Newton", "Joule", "Watt"], a: 0 },
        { q: "Device to measure electric current:", o: ["Voltmeter", "Ammeter", "Galvanometer", "Thermometer"], a: 1 },
        { q: "Sound cannot travel in:", o: ["Air", "Water", "Steel", "Vacuum"], a: 3 },
        { q: "SI unit of charge:", o: ["Ampere", "Volt", "Coulomb", "Ohm"], a: 2 },
        { q: "Heat transfer by direct contact:", o: ["Radiation", "Convection", "Conduction", "Reflection"], a: 2 },
        { q: "Frequency unit:", o: ["Hertz", "Joule", "Watt", "Pascal"], a: 0 },
        { q: "Lens used to correct short sight:", o: ["Convex", "Concave", "Plane", "Cylindrical"], a: 1 },
        { q: "Echo is due to:", o: ["Refraction", "Reflection", "Diffraction", "Absorption"], a: 1 },
        { q: "Potential energy depends on:", o: ["Speed", "Height", "Time", "Area"], a: 1 },
        { q: "Density = ?", o: ["m×v", "m/v", "v/m", "m²"], a: 1 },
        { q: "Earth attracts objects due to:", o: ["Magnetism", "Gravity", "Friction", "Pressure"], a: 1 },
        { q: "Fuse wire is made of:", o: ["Copper", "Iron", "Tin-lead alloy", "Aluminum"], a: 2 },
        { q: "Unit of resistance:", o: ["Ampere", "Volt", "Ohm", "Watt"], a: 2 },
        { q: "Boiling point of water (°C):", o: ["90", "95", "100", "110"], a: 2 },
        { q: "Kinetic energy formula:", o: ["mv", "mv²", "½mv²", "mgh"], a: 2 },
        { q: "Motion in a straight line is:", o: ["Circular", "Linear", "Rotational", "Oscillatory"], a: 1 }
        ],
        medium: [
            { q: "What is the SI unit of force?", o: ["Joule", "Newton", "Watt", "Pascal"], a: 1 },
            { q: "The speed of light in vacuum is approximately:", o: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁵ m/s", "3 × 10⁷ m/s"], a: 0 },
            { q: "Which of these is a scalar quantity?", o: ["Velocity", "Force", "Speed", "Acceleration"], a: 2 },
            { q: "The device used to measure electric current is called:", o: ["Voltmeter", "Ammeter", "Galvanometer", "Ohmmeter"], a: 1 },
            { q: "The acceleration due to gravity on Earth is approximately:", o: ["9.8 m/s²", "10 m/s²", "9 m/s²", "9.5 m/s²"], a: 0 },
            { q: "The energy possessed by a moving object is called:", o: ["Potential energy", "Kinetic energy", "Thermal energy", "Mechanical energy"], a: 1 },
            { q: "Work done is measured in:", o: ["Newton", "Joule", "Watt", "Pascal"], a: 1 },
            { q: "Power is the rate of:", o: ["Work done", "Energy lost", "Force applied", "Acceleration"], a: 0 },
            { q: "Which of these is an example of simple harmonic motion?", o: ["Car moving on road", "Pendulum swinging", "Ball rolling on floor", "Rocket launching"], a: 1 },
            { q: "The device used to detect electric current is:", o: ["Voltmeter", "Galvanometer", "Ammeter", "Ohmmeter"], a: 1 },
            { q: "Which of these is a vector quantity?", o: ["Speed", "Mass", "Velocity", "Distance"], a: 2 },
            { q: "Ohm’s law relates:", o: ["Voltage, current, resistance", "Voltage, power, energy", "Current, charge, time", "Resistance, power, energy"], a: 0 },
            { q: "The formula for density is:", o: ["Mass × Volume", "Mass ÷ Volume", "Volume ÷ Mass", "Mass + Volume"], a: 1 },
            { q: "The unit of pressure in SI is:", o: ["Pascal", "Newton", "Joule", "Watt"], a: 0 },
            { q: "Which of these is used to measure temperature?", o: ["Thermometer", "Barometer", "Hygrometer", "Voltmeter"], a: 0 },
            { q: "The formula for speed is:", o: ["Distance × Time", "Distance ÷ Time", "Time ÷ Distance", "Mass × Acceleration"], a: 1 },
            { q: "The momentum of a body is the product of:", o: ["Mass × Velocity", "Force × Time", "Mass × Acceleration", "Mass × Speed"], a: 0 },
            { q: "The total mechanical energy is the sum of:", o: ["Kinetic + Potential energy", "Work + Force", "Mass + Acceleration", "Voltage + Current"], a: 0 },
            { q: "The SI unit of work is:", o: ["Joule", "Newton", "Watt", "Pascal"], a: 0 },
            { q: "A spring obeys Hooke’s law if:", o: ["F = kx", "F = mv", "F = ma", "F = mg"], a: 0 },
            { q: "The SI unit of frequency is:", o: ["Hertz", "Newton", "Joule", "Watt"], a: 0 },
            { q: "Which of these waves require a medium to propagate?", o: ["Light waves", "Sound waves", "Radio waves", "X-rays"], a: 1 },
            { q: "The focal length of a convex lens is:", o: ["Positive", "Negative", "Zero", "Infinite"], a: 0 },
            { q: "The image formed by a plane mirror is:", o: ["Real and inverted", "Virtual and erect", "Real and erect", "Virtual and inverted"], a: 1 },
            { q: "The law of reflection states:", o: ["Angle of incidence = Angle of reflection", "Angle of incidence = 2 × Angle of reflection", "Angle of incidence > Angle of reflection", "Angle of incidence < Angle of reflection"], a: 0 },
            { q: "The SI unit of electric charge is:", o: ["Coulomb", "Ampere", "Volt", "Ohm"], a: 0 },
            { q: "A concave mirror forms a real image if the object is:", o: ["Beyond the focus", "At the focus", "Between focus and pole", "At infinity"], a: 0 },
            { q: "Speed of sound in air depends on:", o: ["Pressure only", "Temperature only", "Humidity only", "Temperature and medium"], a: 3 },
            { q: "The current through a conductor is measured by:", o: ["Voltmeter", "Ammeter", "Ohmmeter", "Wattmeter"], a: 1 },
            { q: "The acceleration of an object moving in circular motion is:", o: ["Tangential", "Centripetal", "Centrifugal", "Linear"], a: 1 },
            { q: "The energy stored in a stretched spring is:", o: ["Kinetic energy", "Potential energy", "Thermal energy", "Chemical energy"], a: 1 },
            { q: "Which of these is an example of projectile motion?", o: ["Ball rolling on floor", "Stone thrown in air", "Car moving on road", "Pendulum swing"], a: 1 },
            { q: "Which of these quantities is conserved in elastic collision?", o: ["Momentum only", "Kinetic energy only", "Momentum and kinetic energy", "None"], a: 2 },
            { q: "The SI unit of pressure is:", o: ["Pascal", "Newton", "Joule", "Watt"], a: 0 },
            { q: "The speed of light in glass is:", o: ["Less than in air", "Greater than in air", "Same as in air", "Zero"], a: 0 },
            { q: "The turning effect of a force is called:", o: ["Momentum", "Torque", "Impulse", "Work"], a: 1 },
            { q: "The SI unit of torque is:", o: ["Newton-meter", "Joule", "Watt", "Pascal"], a: 0 },
            { q: "The image formed by a concave lens is:", o: ["Virtual and erect", "Real and inverted", "Real and erect", "Virtual and inverted"], a: 0 },
            { q: "Which of these is a longitudinal wave?", o: ["Sound wave", "Light wave", "Radio wave", "X-ray"], a: 0 },
            { q: "The SI unit of electric resistance is:", o: ["Ohm", "Volt", "Ampere", "Joule"], a: 0 },
            { q: "The frequency of a wave is 50 Hz. Its time period is:", o: ["0.02 s", "0.05 s", "2 s", "0.5 s"], a: 1 },
            { q: "The principle of moments states:", o: ["Clockwise moment = Anticlockwise moment", "Force = Mass × Acceleration", "Work done = Force × Distance", "Kinetic energy = ½ mv²"], a: 0 },
            { q: "The SI unit of power is:", o: ["Watt", "Joule", "Newton", "Pascal"], a: 0 },
            { q: "The velocity of an object moving in uniform circular motion is:", o: ["Constant in magnitude and direction", "Constant in magnitude but changing in direction", "Changing in magnitude only", "Changing in magnitude and direction"], a: 1 },
            { q: "Which of these is a unit of electric energy?", o: ["Joule", "Watt", "Newton", "Coulomb"], a: 0 },
            { q: "The formula for kinetic energy is:", o: ["½ mv²", "mgh", "mv", "F × d"], a: 0 },
            { q: "The SI unit of magnetic flux is:", o: ["Weber", "Tesla", "Ampere", "Newton"], a: 0 },
            { q: "Which of these is a fundamental force?", o: ["Gravitational", "Friction", "Tension", "Normal"], a: 0 },
            { q: "The electric field around a point charge is:", o: ["Radial", "Circular", "Uniform", "None"], a: 0 },
            { q: "The SI unit of electric potential is:", o: ["Volt", "Joule", "Watt", "Ohm"], a: 0 },
            { q: "Which of these is used in making a simple electromagnet?", o: ["Wire + current + iron core", "Wire + battery", "Magnet + water", "Copper wire only"], a: 0 },
            { q: "The phenomenon of bending of light around corners is called:", o: ["Reflection", "Refraction", "Diffraction", "Dispersion"], a: 2 },
            { q: "Which of these is a transverse wave?", o: ["Light", "Sound", "Seismic P-wave", "All"], a: 0 },
            { q: "The unit of frequency is:", o: ["Hertz", "Newton", "Joule", "Watt"], a: 0 },
            { q: "The time period of a simple pendulum depends on:", o: ["Length of pendulum", "Mass of bob", "Amplitude only", "Gravity and mass"], a: 0 },
            { q: "The unit of pressure is:", o: ["Pascal", "Newton", "Joule", "Watt"], a: 0 },
            { q: "The SI unit of acceleration is:", o: ["m/s²", "m/s", "m²/s", "N"], a: 0 },
            { q: "The velocity of sound in water is:", o: ["More than in air", "Less than in air", "Same as in air", "Zero"], a: 0 },
            { q: "The electric current produces:", o: ["Magnetic field", "Heat only", "Light only", "None"], a: 0 },
            { q: "A body moves 20 m in 4 s. Its speed is:", o: ["5 m/s", "4 m/s", "6 m/s", "10 m/s"], a: 0 },
            { q: "Newton’s second law states:", o: ["F = ma", "F = mv", "F = mg", "F = m²a"], a: 0 },
            { q: "The energy stored in a capacitor is:", o: ["½ CV²", "CV²", "½ mv²", "mgh"], a: 0 },
            { q: "The unit of electric power is:", o: ["Watt", "Joule", "Newton", "Coulomb"], a: 0 },
            { q: "Which of these is a unit of work?", o: ["Joule", "Watt", "Newton", "Volt"], a: 0 },
            { q: "The resistance of a conductor depends on:", o: ["Length and area", "Temperature", "Material", "All of the above"], a: 3 },
            { q: "Which of these is used in loudspeakers?", o: ["Magnet + coil", "Battery only", "Wire only", "Capacitor"], a: 0 },
            { q: "Which of these is an insulator?", o: ["Rubber", "Copper", "Aluminium", "Iron"], a: 0 },
            { q: "Which of these produces ultrasound?", o: ["Piezoelectric crystal", "Magnet", "Battery", "Coil"], a: 0 },
            { q: "The SI unit of work done is:", o: ["Joule", "Newton", "Watt", "Pascal"], a: 0 },
            { q: "Which of these is the property of light?", o: ["Reflection, Refraction, Diffraction", "Only Reflection", "Only Refraction", "Only Diffraction"], a: 0 }
        ],
        hard: [
            { q: "The period of a simple pendulum is independent of:", o: ["Mass of the bob", "Length of the pendulum", "Acceleration due to gravity", "Amplitude (small)"], a: 0 },
            { q: "The acceleration of a particle in uniform circular motion is:", o: ["Tangential", "Centripetal", "Zero", "Uniform linear"], a: 1 },
            { q: "The centripetal force acting on a particle depends on:", o: ["Mass, speed, radius", "Mass only", "Speed only", "Radius only"], a: 0 },
            { q: "A particle moves with SHM. Its maximum acceleration is:", o: ["ω²A", "ωA", "A/ω²", "A/ω"], a: 0 },
            { q: "The escape velocity from Earth is independent of:", o: ["Mass of the object", "Radius of Earth", "Mass of Earth", "Gravitational constant"], a: 0 },
            { q: "Work done in moving a charge along an equipotential surface is:", o: ["Maximum", "Zero", "Half of potential energy", "Depends on charge"], a: 1 },
            { q: "The energy of a photon depends on:", o: ["Frequency", "Wavelength", "Amplitude", "Both amplitude and frequency"], a: 0 },
            { q: "The de Broglie wavelength of a particle decreases when:", o: ["Velocity increases", "Mass decreases", "Force decreases", "Potential energy increases"], a: 0 },
            { q: "In a series RLC circuit, resonance occurs when:", o: ["XL = XC", "XL > XC", "XL < XC", "R = 0"], a: 0 },
            { q: "The Q-factor of a circuit measures:", o: ["Sharpness of resonance", "Resistance", "Inductance", "Capacitance"], a: 0 },
            { q: "The magnetic field inside a long solenoid is proportional to:", o: ["Current × Number of turns/length", "Current only", "Number of turns only", "Length only"], a: 0 },
            { q: "Mutual inductance depends on:", o: ["Number of turns and area of coils", "Resistance of wire", "Length of wire only", "Voltage"], a: 0 },
            { q: "The energy stored in a capacitor is:", o: ["½ CV²", "CV²", "½ QV", "QV"], a: 0 },
            { q: "In photoelectric effect, increasing intensity of light increases:", o: ["Kinetic energy of electrons", "Number of electrons emitted", "Work function", "Wavelength of light"], a: 1 },
            { q: "The stopping potential depends on:", o: ["Frequency of light", "Intensity of light", "Area of the plate", "Distance between plates"], a: 0 },
            { q: "The angle of refraction decreases when:", o: ["Light passes from denser to rarer medium", "Light passes from rarer to denser medium", "Wavelength increases", "Frequency increases"], a: 1 },
            { q: "Which of these quantities is not conserved in inelastic collision?", o: ["Momentum", "Kinetic energy", "Total energy", "Mass"], a: 1 },
            { q: "For a freely falling body, kinetic energy is:", o: ["Equal to potential energy at mid-point", "Equal to potential energy at top", "Equal to potential energy at bottom", "Zero"], a: 0 },
            { q: "A body of mass m slides down a frictionless incline. Its acceleration is:", o: ["g sin θ", "g cos θ", "g tan θ", "g"], a: 0 },
            { q: "The period of a mass-spring system is:", o: ["2π√(m/k)", "2π√(k/m)", "2πm/k", "2πk/m"], a: 0 },
            { q: "The frequency of a simple pendulum is proportional to:", o: ["1/√L", "√L", "L", "L²"], a: 0 },
            { q: "The SI unit of magnetic flux is:", o: ["Weber", "Tesla", "Newton", "Volt"], a: 0 },
            { q: "The SI unit of magnetic flux density is:", o: ["Tesla", "Weber", "Newton", "Ampere"], a: 0 },
            { q: "The velocity of sound is maximum in:", o: ["Solids", "Liquids", "Gases", "Vacuum"], a: 0 },
            { q: "For constructive interference, path difference should be:", o: ["nλ", "λ/2", "λ/4", "(n+½)λ"], a: 0 },
            { q: "Diffraction is maximum when:", o: ["Wavelength ≈ slit width", "Wavelength << slit width", "Wavelength >> slit width", "Wavelength = 0"], a: 0 },
            { q: "Polarization can occur for:", o: ["Transverse waves", "Longitudinal waves", "Both", "None"], a: 0 },
            { q: "The momentum of a photon is:", o: ["h/λ", "hλ", "hν", "hc/λ"], a: 0 },
            { q: "The de Broglie wavelength depends on:", o: ["Momentum", "Mass only", "Velocity only", "Charge"], a: 0 },
            { q: "The stopping potential is:", o: ["Independent of intensity of light", "Dependent on intensity", "Dependent on area of surface", "Dependent on distance from source"], a: 0 },
            { q: "In a LCR circuit at resonance, impedance is:", o: ["Minimum", "Maximum", "Zero", "Infinite"], a: 0 },
            { q: "The phase difference between voltage and current in pure inductor is:", o: ["90° (current lags)", "90° (current leads)", "0°", "180°"], a: 0 },
            { q: "The phase difference between voltage and current in pure capacitor is:", o: ["90° (current leads)", "90° (current lags)", "0°", "180°"], a: 0 },
            { q: "In a transformer, the input and output power (ideal) are:", o: ["Equal", "Input > Output", "Input < Output", "Zero"], a: 0 },
            { q: "The unit of inductive reactance is:", o: ["Ohm", "Volt", "Ampere", "Henry"], a: 0 },
            { q: "The potential difference across a pure resistor is:", o: ["In phase with current", "90° ahead of current", "90° behind current", "180° out of phase"], a: 0 },
            { q: "For an AC current, root mean square (RMS) value is:", o: ["I₀/√2", "I₀", "2I₀", "I₀/2"], a: 0 },
            { q: "In a series LCR circuit at resonance, current is:", o: ["Maximum", "Minimum", "Zero", "Infinite"], a: 0 },
            { q: "Which of the following radiations has maximum penetrating power?", o: ["Gamma rays", "X-rays", "UV rays", "Visible light"], a: 0 },
            { q: "The law of conservation of charge states:", o: ["Total charge in a system remains constant", "Charge can be created", "Charge can be destroyed", "Charge depends on temperature"], a: 0 },
            { q: "The magnetic force on a moving charge is zero when velocity is:", o: ["Parallel to magnetic field", "Perpendicular to magnetic field", "Opposite to field", "Zero"], a: 0 },
            { q: "The SI unit of electric potential is:", o: ["Volt", "Joule", "Coulomb", "Watt"], a: 0 },
            { q: "Magnetic field inside a solenoid is:", o: ["B = μ₀ n I", "B = μ₀ I²", "B = μ₀ R I", "B = μ₀ / I"], a: 0 },
            { q: "The angle of incidence at which total internal reflection occurs is:", o: ["Critical angle", "Brewster’s angle", "Refraction angle", "Zero angle"], a: 0 },
            { q: "Brewster’s angle is related to:", o: ["Polarization", "Diffraction", "Interference", "Reflection only"], a: 0 },
            { q: "The time period of LC oscillation is:", o: ["2π√(LC)", "√(LC)", "1/√(LC)", "2π LC"], a: 0 },
            { q: "The RMS value of sinusoidal current is:", o: ["I₀/√2", "I₀", "I₀/2", "2I₀"], a: 0 },
            { q: "The energy stored in an inductor is:", o: ["½ LI²", "½ CV²", "½ mv²", "mgh"], a: 0 },
            { q: "Magnetic flux linkage is:", o: ["NΦ", "B × A", "μ₀ n I", "B / A"], a: 0 },
            { q: "The self-inductance of a coil depends on:", o: ["Number of turns and area", "Length only", "Resistance", "Voltage"], a: 0 },
            { q: "In photoelectric effect, the kinetic energy of electrons depends on:", o: ["Frequency of light", "Intensity of light", "Area of plate", "Distance from source"], a: 0 },
            { q: "A ray of light passes from air to glass. Speed of light:", o: ["Decreases", "Increases", "Constant", "Zero"], a: 0 },
            { q: "When two waves interfere constructively, path difference is:", o: ["nλ", "(n + ½)λ", "λ/2", "λ/4"], a: 0 },
            { q: "The angular frequency of SHM is:", o: ["√(k/m)", "√(m/k)", "k/m", "m/k"], a: 0 },
            { q: "The momentum of photon is given by:", o: ["h/λ", "hc/λ", "hν", "hλ"], a: 0 },
            { q: "The kinetic energy of photoelectron is:", o: ["hf - φ", "φ - hf", "hf + φ", "hf × φ"], a: 0 },
            { q: "The electric field at the surface of a conductor in electrostatic equilibrium is:", o: ["Perpendicular to surface", "Parallel to surface", "Zero", "Along radius"], a: 0 },
            { q: "The acceleration due to gravity decreases with:", o: ["Altitude", "Latitude", "Mass of object", "Speed of object"], a: 0 },
            { q: "The SI unit of moment of force is:", o: ["Newton-meter", "Joule", "Watt", "Pascal"], a: 0 },
            { q: "The wavelength of light is minimum in:", o: ["Gamma rays", "Radio waves", "Visible light", "Microwaves"], a: 0 },
            { q: "The time period of a physical pendulum depends on:", o: ["Moment of inertia", "Mass only", "Length only", "Amplitude"], a: 0 },
            { q: "A satellite in circular orbit experiences:", o: ["Centripetal acceleration", "Centrifugal acceleration", "No acceleration", "Gravitational acceleration only"], a: 0 },
            { q: "The total energy of satellite in circular orbit:", o: ["Negative", "Positive", "Zero", "Infinite"], a: 0 },
            { q: "In magnetic field, force on a moving charge is maximum when velocity is:", o: ["Perpendicular to field", "Parallel to field", "Anti-parallel to field", "Zero"], a: 0 },
            { q: "The magnetic moment of current loop is:", o: ["I × Area", "I × R", "B × Area", "μ₀ I N"], a: 0 },
            { q: "The speed of electromagnetic waves in vacuum:", o: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁵ m/s", "3 × 10⁷ m/s"], a: 0 },
            { q: "The wavelength of de Broglie wave for electron increases when:", o: ["Velocity decreases", "Velocity increases", "Mass increases", "Potential increases"], a: 0 },
            { q: "The maximum kinetic energy of electrons in photoelectric effect depends on:", o: ["Frequency of incident light", "Intensity of light", "Area of metal", "None"], a: 0 },
            { q: "A coil of wire has self-inductance L. Energy stored for current I is:", o: ["½ LI²", "LI²", "½ CV²", "½ mv²"], a: 0 },
            { q: "The resonance frequency of a series LCR circuit is:", o: ["1 / (2π√(LC))", "√(LC)", "1 / LC", "2π√(LC)"], a: 0 }
        ]
    },
    chemistry: {
        easy: [
        { q: "Atomic number represents:", o: ["Neutrons", "Electrons", "Protons", "Mass"], a: 2 },
        { q: "Chemical formula of water:", o: ["H₂O", "CO₂", "O₂", "H₂"], a: 0 },
        { q: "pH less than 7 is:", o: ["Neutral", "Basic", "Acidic", "Salt"], a: 2 },
        { q: "NaCl is commonly called:", o: ["Sugar", "Baking soda", "Common salt", "Lime"], a: 2 },
        { q: "Noble gases are:", o: ["Reactive", "Inert", "Metals", "Liquids"], a: 1 },
        { q: "Symbol of sodium:", o: ["S", "Na", "So", "N"], a: 1 },
        { q: "Rusting needs:", o: ["Oxygen", "Water", "Both Oxygen & Water", "Nitrogen"], a: 2 },
        { q: "Atomic mass unit is:", o: ["kg", "g", "amu", "mol"], a: 2 },
        { q: "Example of a Base:", o: ["HCl", "NaOH", "CO₂", "H₂SO₄"], a: 1 },
        { q: "Periodic table is arranged by:", o: ["Mass", "Density", "Atomic number", "Color"], a: 2 },
        { q: "Valency of oxygen is:", o: ["1", "2", "3", "4"], a: 1 },
        { q: "Chemical name of baking soda:", o: ["Sodium chloride", "Sodium carbonate", "Sodium bicarbonate", "Calcium carbonate"], a: 2 },
        { q: "Acid present in lemon:", o: ["Acetic", "Hydrochloric", "Citric", "Sulphuric"], a: 2 },
        { q: "Which is an element?", o: ["Water", "Salt", "Oxygen", "Sugar"], a: 2 },
        { q: "Smallest particle of element:", o: ["Molecule", "Atom", "Ion", "Compound"], a: 1 },
        { q: "Which gas is used in photosynthesis?", o: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], a: 2 },
        { q: "Metals are generally:", o: ["Brittle", "Poor conductors", "Dull", "Good conductors"], a: 3 },
        { q: "Non-metals are usually:", o: ["Shiny", "Conductors", "Ductile", "Brittle"], a: 3 },
        { q: "Chemical formula of carbon dioxide:", o: ["CO", "CO₂", "C₂O", "C₂O₂"], a: 1 },
        { q: "Period in periodic table represents:", o: ["Valency", "Protons", "Energy shells", "Neutrons"], a: 2 },
        { q: "Group in periodic table shows:", o: ["Atomic mass", "Energy levels", "Valence electrons", "Density"], a: 2 },
        { q: "Which is an alkaline earth metal?", o: ["Sodium", "Potassium", "Calcium", "Iron"], a: 2 },
        { q: "Hardest natural substance:", o: ["Gold", "Iron", "Diamond", "Graphite"], a: 2 },
        { q: "Alloy of iron and carbon is:", o: ["Brass", "Bronze", "Steel", "Copper"], a: 2 },
        { q: "Chemical reaction involves:", o: ["Nuclear change", "Physical change", "Rearrangement of atoms", "Color change only"], a: 2 },
        { q: "Exothermic reaction releases:", o: ["Cold", "Light only", "Heat", "Electricity"], a: 2 },
        { q: "Endothermic reaction absorbs:", o: ["Heat", "Light", "Water", "Oxygen"], a: 0 },
        { q: "Unit of amount of substance:", o: ["Gram", "Mole", "Liter", "kg"], a: 1 },
        { q: "Which is a compound?", o: ["Oxygen", "Hydrogen", "Sodium", "Water"], a: 3 },
        { q: "Chemical symbol of potassium:", o: ["P", "Pt", "K", "Po"], a: 2 },
        { q: "Acid turns blue litmus to:", o: ["Blue", "Green", "Yellow", "Red"], a: 3 },
        { q: "Base turns red litmus to:", o: ["Red", "Blue", "Black", "Yellow"], a: 1 },
        { q: "Neutralization reaction produces:", o: ["Acid", "Base", "Salt and water", "Gas only"], a: 2 },
        { q: "Gas used in fire extinguishers:", o: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide"], a: 3 },
        { q: "Atomic mass is sum of:", o: ["Protons only", "Neutrons only", "Electrons", "Protons and neutrons"], a: 3 },
        { q: "Which is a non-metal?", o: ["Iron", "Copper", "Aluminium", "Sulphur"], a: 3 },
        { q: "Chemical name of rust:", o: ["Iron sulphide", "Iron oxide", "Iron carbonate", "Iron nitrate"], a: 1 },
        { q: "Which is a pure substance?", o: ["Air", "Milk", "Alloy", "Element"], a: 3 },
        { q: "Which has fixed composition?", o: ["Mixture", "Solution", "Compound", "Alloy"], a: 2 },
        { q: "Gas essential for breathing:", o: ["Nitrogen", "Carbon dioxide", "Oxygen", "Hydrogen"], a: 2 },
        { q: "Periodic table was developed by:", o: ["Dalton", "Bohr", "Mendeleev", "Rutherford"], a: 2 },
        { q: "Acid rain is caused by:", o: ["CO₂", "SO₂ and NO₂", "O₂", "H₂"], a: 1 },
        { q: "Which is a synthetic material?", o: ["Cotton", "Wool", "Silk", "Nylon"], a: 3 },
        { q: "Strong acid example:", o: ["Acetic acid", "Citric acid", "Hydrochloric acid", "Carbonic acid"], a: 2 },
        { q: "Base used in soap making:", o: ["HCl", "NaOH", "HNO₃", "H₂SO₄"], a: 1 },
        { q: "Matter exists in how many basic states?", o: ["2", "3", "4", "5"], a: 1 },
        { q: "Gas state has:", o: ["Fixed shape", "Fixed volume", "No fixed shape and volume", "Hard structure"], a: 2 },
        { q: "Boiling is conversion of:", o: ["Solid to gas", "Liquid to gas", "Gas to liquid", "Solid to liquid"], a: 1 },
        { q: "Which is an indicator?", o: ["Salt", "Sugar", "Litmus", "Water"], a: 2 },
        { q: "Chemical change produces:", o: ["No new substance", "New substance", "Temporary change", "Shape change"], a: 1 },
        { q: "Smallest particle of element:", o: ["Molecule", "Atom", "Ion", "Electron"], a: 1 },
        { q: "HCl is an:", o: ["Base", "Salt", "Acid", "Alkali"], a: 2 },
        { q: "Chemical change is:", o: ["Reversible", "Physical", "Irreversible", "Temporary"], a: 2 },
        { q: "Valency of oxygen:", o: ["1", "2", "3", "4"], a: 1 },
        { q: "CO₂ turns limewater:", o: ["Blue", "Pink", "Milky", "Colorless"], a: 2 },
        { q: "Symbol of potassium:", o: ["P", "K", "Po", "Pt"], a: 1 },
        { q: "Metal used in wires:", o: ["Iron", "Copper", "Zinc", "Lead"], a: 1 },
        { q: "Law of conservation given by:", o: ["Dalton", "Lavoisier", "Bohr", "Rutherford"], a: 1 },
        { q: "pH of neutral solution:", o: ["0", "7", "14", "10"], a: 1 },
        { q: "Rust is:", o: ["FeO", "Fe₂O₃·xH₂O", "Fe₂O₃", "Fe₃O₄"], a: 1 },
        { q: "Non-metal among these:", o: ["Iron", "Copper", "Sulfur", "Zinc"], a: 2 },
        { q: "Chemical formula of ammonia:", o: ["NH₂", "NH₃", "NO₂", "N₂O"], a: 1 },
        { q: "Strong base:", o: ["NaOH", "NH₄OH", "H₂O", "CO₂"], a: 0 },
        { q: "Unit of amount of substance:", o: ["kg", "mol", "g", "L"], a: 1 },
        { q: "Alloy of iron is:", o: ["Brass", "Bronze", "Steel", "Copper"], a: 2 },
        { q: "Period number shows:", o: ["Protons", "Shells", "Neutrons", "Valency"], a: 1 },
        { q: "Acid in vinegar:", o: ["Citric", "Acetic", "Lactic", "Formic"], a: 1 },
        { q: "Chemical symbols are written by:", o: ["Capital letters", "Small letters", "One or two letters", "Numbers"], a: 2 },
        { q: "Gas used in respiration:", o: ["Nitrogen", "Oxygen", "CO₂", "Hydrogen"], a: 1 },
        { q: "Element with atomic number 1:", o: ["Helium", "Oxygen", "Hydrogen", "Carbon"], a: 2 }
        ],
        medium: [
            { q: "Which of the following is an ionic compound?", o: ["CO₂", "NaCl", "H₂O", "CH₄"], a: 1 },
            { q: "Which gas is released when sodium carbonate reacts with HCl?", o: ["CO₂", "H₂", "O₂", "N₂"], a: 0 },
            { q: "What is the oxidation state of sulfur in H₂SO₄?", o: ["+6", "+4", "+2", "-2"], a: 0 },
            { q: "The process of solid directly converting into gas is called:", o: ["Condensation", "Sublimation", "Evaporation", "Freezing"], a: 1 },
            { q: "Which of the following is a weak acid?", o: ["HCl", "H₂SO₄", "CH₃COOH", "HNO₃"], a: 2 },
            { q: "Which element is most reactive in Group 1?", o: ["Li", "Na", "K", "Rb"], a: 3 },
            { q: "What is the pH of a 0.01 M HCl solution?", o: ["2", "1", "4", "3"], a: 0 },
            { q: "Which of these is an example of a chemical change?", o: ["Melting ice", "Boiling water", "Rusting iron", "Dissolving sugar"], a: 2 },
            { q: "Which solution conducts electricity?", o: ["Sugar solution", "Salt solution", "Alcohol", "Distilled water"], a: 1 },
            { q: "Which of these compounds is covalent?", o: ["NaCl", "H₂O", "MgO", "KBr"], a: 1 },
            { q: "What is the formula of washing soda?", o: ["Na₂CO₃·10H₂O", "NaHCO₃", "CaCO₃", "Na₂SO₄"], a: 0 },
            { q: "Which of these is a noble gas?", o: ["O₂", "N₂", "Ne", "Cl₂"], a: 2 },
            { q: "Which of these elements is diatomic in nature?", o: ["Helium", "Hydrogen", "Neon", "Argon"], a: 1 },
            { q: "Which acid is found in lemon juice?", o: ["Hydrochloric acid", "Sulfuric acid", "Citric acid", "Acetic acid"], a: 2 },
            { q: "Which of the following is used in making fertilizers?", o: ["NaCl", "H₂SO₄", "NH₄NO₃", "H₂O"], a: 2 },
            { q: "Which of these metals reacts with cold water?", o: ["Sodium", "Iron", "Copper", "Silver"], a: 0 },
            { q: "Which of these is the main component of natural gas?", o: ["Methane", "Ethane", "Propane", "Butane"], a: 0 },
            { q: "What is the chemical formula of common salt?", o: ["Na₂SO₄", "NaCl", "KCl", "MgCl₂"], a: 1 },
            { q: "Which of these is a base?", o: ["HCl", "NaOH", "CH₃COOH", "H₂SO₄"], a: 1 },
            { q: "Which gas is responsible for global warming?", o: ["O₂", "CO₂", "N₂", "H₂"], a: 1 },
            { q: "Which of these elements is most electronegative?", o: ["Oxygen", "Fluorine", "Nitrogen", "Chlorine"], a: 1 },
            { q: "The main component of baking soda is:", o: ["NaCl", "NaHCO₃", "KCl", "CaCO₃"], a: 1 },
            { q: "Which of these is a volatile liquid?", o: ["Water", "Alcohol", "Oil", "Honey"], a: 1 },
            { q: "Which of these metals does not react with acids?", o: ["Zinc", "Magnesium", "Gold", "Iron"], a: 2 },
            { q: "Which of the following is a polymer?", o: ["Starch", "H₂O", "CO₂", "NaCl"], a: 0 },
            { q: "Which of these is used in making soap?", o: ["Fat", "Acid", "Base", "Salt"], a: 0 },
            { q: "Which of these shows the property of conductivity?", o: ["Glass", "Metal", "Plastic", "Wood"], a: 1 },
            { q: "Which of the following is an oxidizing agent?", o: ["H₂O₂", "NaOH", "Zn", "Fe"], a: 0 },
            { q: "Which of these is a diatomic molecule?", o: ["O₂", "CO₂", "H₂O", "NaCl"], a: 0 },
            { q: "Which gas is evolved when Zn reacts with HCl?", o: ["H₂", "O₂", "CO₂", "N₂"], a: 0 },
            { q: "Which of these is a physical change?", o: ["Rusting", "Melting", "Burning", "Digestion"], a: 1 },
            { q: "Which of these is a covalent compound?", o: ["NaCl", "H₂O", "KCl", "MgO"], a: 1 },
            { q: "Which of the following is acidic in nature?", o: ["Lemon juice", "Soap", "Milk of magnesia", "Water"], a: 0 },
            { q: "Which of these is a weak base?", o: ["NaOH", "NH₄OH", "KOH", "Ca(OH)₂"], a: 1 },
            { q: "Which of these metals floats on water?", o: ["Sodium", "Iron", "Copper", "Lead"], a: 0 },
            { q: "Which of these is used in making fertilizers?", o: ["HCl", "NH₄NO₃", "H₂O", "NaOH"], a: 1 },
            { q: "Which of these gases is lighter than air?", o: ["Oxygen", "Hydrogen", "CO₂", "N₂"], a: 1 },
            { q: "Which of these is a noble gas?", o: ["Argon", "Oxygen", "Nitrogen", "Hydrogen"], a: 0 },
            { q: "Which of these is a metalloid?", o: ["Boron", "Sodium", "Calcium", "Aluminium"], a: 0 },
            { q: "Which of these metals reacts violently with water?", o: ["Potassium", "Zinc", "Iron", "Copper"], a: 0 },
            { q: "Which of these elements is required for thyroid function?", o: ["Iodine", "Iron", "Sodium", "Potassium"], a: 0 },
            { q: "Which of these compounds is used as a disinfectant?", o: ["NaCl", "CaO", "NaClO", "H₂O"], a: 2 },
            { q: "Which of these is a common salt?", o: ["NaCl", "KCl", "MgCl₂", "CaCl₂"], a: 0 },
            { q: "Which of the following is a reducing sugar?", o: ["Sucrose", "Glucose", "Starch", "Cellulose"], a: 1 },
            { q: "Which of these is a strong acid?", o: ["HCl", "CH₃COOH", "H₂CO₃", "H₂O"], a: 0 },
            { q: "Which of these is used in making glass?", o: ["Na₂CO₃", "HCl", "H₂SO₄", "KOH"], a: 0 },
            { q: "Which of these is a reducing agent?", o: ["Zn", "H₂O₂", "Cl₂", "O₂"], a: 0 },
            { q: "Which of these elements is essential for blood clotting?", o: ["Calcium", "Sodium", "Potassium", "Magnesium"], a: 0 },
            { q: "Which of these is an example of an alkali?", o: ["NaOH", "HCl", "CH₃COOH", "H₂SO₄"], a: 0 },
            { q: "Which of these is the gas responsible for rusting?", o: ["Oxygen", "Hydrogen", "CO₂", "Nitrogen"], a: 0 },
            { q: "Which of these compounds is formed when an acid reacts with a base?", o: ["Salt and water", "Salt and gas", "Water only", "Gas only"], a: 0 },
            { q: "Which of these is used in soda water?", o: ["NaHCO₃", "CO₂", "NaCl", "H₂O"], a: 1 },
            { q: "Which of these is used in antiseptics?", o: ["HCl", "H₂O₂", "NaOH", "KCl"], a: 1 },
            { q: "Which of these is the hardest naturally occurring substance?", o: ["Gold", "Diamond", "Graphite", "Iron"], a: 1 },
            { q: "Which of these shows allotropy?", o: ["Carbon", "Sodium", "Oxygen", "Chlorine"], a: 0 },
            { q: "Which of these metals is liquid at room temperature?", o: ["Mercury", "Sodium", "Iron", "Copper"], a: 0 },
            { q: "Which of these is a synthetic polymer?", o: ["Nylon", "Starch", "Cellulose", "Glucose"], a: 0 },
            { q: "Which of these is used in antiseptic creams?", o: ["Iodine", "HCl", "NaOH", "H₂SO₄"], a: 0 },
            { q: "Which of these gases is used in welding?", o: ["Oxygen", "Acetylene", "Nitrogen", "CO₂"], a: 1 },
            { q: "Which of these acids is used in pickling of steel?", o: ["H₂SO₄", "HCl", "CH₃COOH", "HNO₃"], a: 1 },
            { q: "Which of these metals is used in thermite reaction?", o: ["Aluminium", "Sodium", "Magnesium", "Copper"], a: 0 },
            { q: "Which of these is used in toothpaste?", o: ["CaCO₃", "HCl", "NaOH", "H₂SO₄"], a: 0 },
            { q: "Which of these is a biodegradable polymer?", o: ["Starch", "Nylon", "Plastic", "PVC"], a: 0 },
            { q: "Which of these compounds is used in soap making?", o: ["Fats", "NaCl", "KCl", "H₂O"], a: 0 },
            { q: "Which of these is a transition element?", o: ["Iron", "Sodium", "Potassium", "Calcium"], a: 0 },
            { q: "Which of these gases is used in balloons?", o: ["Hydrogen", "Oxygen", "Nitrogen", "CO₂"], a: 0 },
            { q: "Which of these is used as a preservative?", o: ["NaCl", "HCl", "NaOH", "KCl"], a: 0 },
            { q: "Which of these elements is used in making batteries?", o: ["Zinc", "Iron", "Copper", "Sodium"], a: 0 },
            { q: "Which of these compounds is used in fire extinguishers?", o: ["CO₂", "H₂O", "NaCl", "O₂"], a: 0 },
            { q: "Which of these metals is highly reactive with air?", o: ["Sodium", "Copper", "Iron", "Gold"], a: 0 }
        ],
        hard: [
            { q: "Which of these is amphoteric?", o: ["NaOH", "Al₂O₃", "HCl", "MgO"], a: 1 },
            { q: "The volume of 2 moles of gas at STP is:", o: ["11.2 L", "22.4 L", "44.8 L", "33.6 L"], a: 2 },
            { q: "Which compound is used as a bleaching agent?", o: ["CaO", "NaClO", "H₂O₂", "K₂SO₄"], a: 1 },
            { q: "In electrolysis of water, at which electrode is hydrogen formed?", o: ["Anode", "Cathode", "Both", "None"], a: 1 },
            { q: "Which element has the highest first ionization energy?", o: ["Na", "O", "F", "Mg"], a: 2 },
            { q: "Which of the following is a reducing sugar?", o: ["Sucrose", "Glucose", "Starch", "Cellulose"], a: 1 },
            { q: "The gas evolved when baking soda reacts with vinegar is:", o: ["CO₂", "H₂", "O₂", "N₂"], a: 0 },
            { q: "Which acid is used in car batteries?", o: ["HCl", "H₂SO₄", "HNO₃", "CH₃COOH"], a: 1 },
            { q: "Which of the following shows allotropy?", o: ["Na", "C", "Cl", "K"], a: 1 },
            { q: "Which is more reactive: Mg or Zn?", o: ["Mg", "Zn", "Both same", "None"], a: 0 },
            { q: "Which of the following has a trigonal planar geometry?", o: ["CH₄", "BF₃", "NH₃", "H₂O"], a: 1 },
            { q: "The process of rusting requires:", o: ["Air only", "Water only", "Air and Water", "Neither"], a: 2 },
            { q: "Which of the following is a Lewis acid?", o: ["NH₃", "BF₃", "H₂O", "CH₄"], a: 1 },
            { q: "Which of these is used as a refrigerant?", o: ["NH₃", "CO₂", "CH₄", "O₂"], a: 0 },
            { q: "Which of these salts is used in flame tests to produce yellow color?", o: ["NaCl", "KCl", "CaCl₂", "LiCl"], a: 0 },
            { q: "Which of these gases is used in balloons because it is non-flammable?", o: ["Hydrogen", "Helium", "Methane", "Oxygen"], a: 1 },
            { q: "Which of these acids is monoprotic?", o: ["H₂SO₄", "HCl", "H₃PO₄", "H₂CO₃"], a: 1 },
            { q: "Which of the following compounds is amphiprotic?", o: ["H₂O", "HCl", "NaOH", "H₂SO₄"], a: 0 },
            { q: "The molarity of 18 g NaOH in 1 L solution is:", o: ["0.5 M", "1 M", "2 M", "0.1 M"], a: 1 },
            { q: "Which of these is a strong acid?", o: ["HCl", "CH₃COOH", "H₂CO₃", "H₂O"], a: 0 },
            { q: "The main product of reaction between ethene and HBr is:", o: ["Bromoethane", "Dibromoethane", "Ethanol", "Propane"], a: 0 },
            { q: "Which of these elements is a halogen?", o: ["F", "O", "N", "H"], a: 0 },
            { q: "Which of these reactions is exothermic?", o: ["Evaporation", "Combustion", "Melting", "Sublimation"], a: 1 },
            { q: "Which of these ions is responsible for hardness of water?", o: ["Na⁺", "Ca²⁺", "K⁺", "Cl⁻"], a: 1 },
            { q: "Which of these elements is used in making nuclear reactors?", o: ["Uranium", "Gold", "Copper", "Aluminium"], a: 0 },
            { q: "Which of these salts is used in baking?", o: ["NaHCO₃", "KCl", "NaCl", "CaCO₃"], a: 0 },
            { q: "Which of these gases is responsible for acid rain?", o: ["CO₂", "SO₂", "O₂", "H₂"], a: 1 },
            { q: "Which of the following is a transition element?", o: ["Iron", "Sodium", "Potassium", "Calcium"], a: 0 },
            { q: "Which of these compounds is used in antacids?", o: ["Mg(OH)₂", "NaCl", "HCl", "CaCO₃"], a: 0 },
            { q: "Which of these is a strong base?", o: ["NaOH", "NH₄OH", "Al(OH)₃", "H₂O"], a: 0 },
            { q: "Which of these gases can be collected by downward displacement of water?", o: ["CO₂", "H₂", "NH₃", "O₂"], a: 0 },
            { q: "Which of these is used in making fertilizer ammonium nitrate?", o: ["NH₃", "HCl", "NaOH", "KCl"], a: 0 },
            { q: "Which of these acids is dibasic?", o: ["H₂SO₄", "HCl", "HNO₃", "CH₃COOH"], a: 0 },
            { q: "Which of these compounds is used in making matches?", o: ["KClO₃", "NaCl", "H₂O", "CO₂"], a: 0 },
            { q: "Which of these shows geometrical isomerism?", o: ["But-2-ene", "Butane", "Methane", "Ethane"], a: 0 },
            { q: "Which of these is used as a fuel in rockets?", o: ["Liquid hydrogen", "Methane", "Ethanol", "CO₂"], a: 0 },
            { q: "Which of these compounds is used as a preservative in food?", o: ["NaNO₂", "NaCl", "KCl", "NaOH"], a: 0 },
            { q: "Which of these gases is heavier than air?", o: ["CO₂", "H₂", "O₂", "He"], a: 0 },
            { q: "Which of these metals is least reactive?", o: ["Gold", "Sodium", "Potassium", "Calcium"], a: 0 },
            { q: "Which of these salts is used in cold packs?", o: ["NH₄NO₃", "NaCl", "KCl", "CaCO₃"], a: 0 },
            { q: "Which of these reactions is endothermic?", o: ["Photosynthesis", "Combustion", "Neutralization", "Respiration"], a: 0 },
            { q: "Which of these compounds is used in fire extinguishers?", o: ["CO₂", "NaCl", "H₂O", "O₂"], a: 0 },
            { q: "Which of these is an allotrope of carbon?", o: ["Diamond", "Sodium", "Oxygen", "Hydrogen"], a: 0 },
            { q: "Which of these metals reacts with steam to form oxide and hydrogen?", o: ["Magnesium", "Copper", "Silver", "Gold"], a: 0 },
            { q: "Which of these gases is collected by upward displacement of air?", o: ["H₂", "O₂", "CO₂", "N₂"], a: 1 },
            { q: "Which of these metals is used in galvanization?", o: ["Zinc", "Copper", "Iron", "Silver"], a: 0 },
            { q: "Which of these gases is used in soda water?", o: ["CO₂", "H₂", "O₂", "N₂"], a: 0 },
            { q: "Which of these acids is trihydric?", o: ["H₃PO₄", "HCl", "H₂SO₄", "HNO₃"], a: 0 },
            { q: "Which of these compounds is used in antiseptics?", o: ["H₂O₂", "NaCl", "KCl", "HCl"], a: 0 },
            { q: "Which of these is a strong electrolyte?", o: ["NaCl", "CH₃COOH", "H₂O", "Sugar"], a: 0 },
            { q: "Which of these reactions produces CO₂ gas?", o: ["NaHCO₃ + HCl", "H₂ + O₂", "Na + H₂O", "N₂ + O₂"], a: 0 },
            { q: "Which of these metals is used in making thermometers?", o: ["Mercury", "Sodium", "Copper", "Aluminium"], a: 0 },
            { q: "Which of these elements is used in making nuclear fuel?", o: ["Uranium", "Gold", "Copper", "Sodium"], a: 0 },
            { q: "Which of these compounds is used in glass making?", o: ["Na₂CO₃", "HCl", "H₂SO₄", "KCl"], a: 0 },
            { q: "Which of these is a polar molecule?", o: ["H₂O", "CO₂", "CH₄", "N₂"], a: 0 },
            { q: "Which of these metals is liquid at room temperature?", o: ["Mercury", "Sodium", "Iron", "Copper"], a: 0 },
            { q: "Which of these compounds is used in making explosives?", o: ["TNT", "NaCl", "H₂O", "CO₂"], a: 0 },
            { q: "Which of these acids is used in pickling of steel?", o: ["HCl", "H₂SO₄", "CH₃COOH", "HNO₃"], a: 0 },
            { q: "Which of these gases is used in welding?", o: ["Acetylene", "Oxygen", "Nitrogen", "CO₂"], a: 0 },
            { q: "Which of these elements is used in making LEDs?", o: ["Gallium", "Iron", "Copper", "Sodium"], a: 0 },
            { q: "Which of these compounds is used in antiseptic creams?", o: ["Iodine", "HCl", "NaOH", "H₂SO₄"], a: 0 },
            { q: "Which of these is a reducing agent?", o: ["Zn", "H₂O₂", "Cl₂", "O₂"], a: 0 },
            { q: "Which of these metals floats on water?", o: ["Sodium", "Iron", "Copper", "Lead"], a: 0 },
            { q: "Which of these salts is used in cold packs?", o: ["NH₄NO₃", "NaCl", "KCl", "CaCO₃"], a: 0 },
            { q: "Which of these reactions is exothermic?", o: ["Combustion", "Photosynthesis", "Evaporation", "Sublimation"], a: 0 },
            { q: "Which of these compounds is amphoteric?", o: ["Al(OH)₃", "NaCl", "HCl", "KCl"], a: 0 },
            { q: "Which of these elements is essential for hemoglobin?", o: ["Iron", "Sodium", "Potassium", "Calcium"], a: 0 },
            { q: "Which of these is used in making matches?", o: ["KClO₃", "NaCl", "H₂O", "CO₂"], a: 0 },
            { q: "Which of these gases is responsible for ozone depletion?", o: ["CFCs", "CO₂", "O₂", "H₂"], a: 0 },
            { q: "Which of these compounds is used in detergents?", o: ["Sodium salts of fatty acids", "HCl", "NaOH", "KCl"], a: 0 }
        ]
    },
    computer: {
        easy: [
        { q: "Brain of computer:", o: ["RAM", "Monitor", "CPU", "Keyboard"], a: 2 },
        { q: "Binary system uses:", o: ["2 & 3", "1 & 2", "0 & 1", "8 & 9"], a: 2 },
        { q: "RAM is:", o: ["Permanent", "Volatile", "Optical", "External"], a: 1 },
        { q: "Which is an Input device?", o: ["Printer", "Monitor", "Scanner", "Speaker"], a: 2 },
        { q: "1 KB = ?", o: ["100 bytes", "512 bytes", "1024 bytes", "1000 bytes"], a: 2 },
        { q: "Example of Software:", o: ["Mouse", "Keyboard", "Windows", "CPU"], a: 2 },
        { q: "Which is an Output device?", o: ["Scanner", "Keyboard", "Monitor", "Mouse"], a: 2 },
        { q: "Full form of CPU:", o: ["Central Process Unit", "Central Processing Unit", "Control Program Unit", "Computer Process Unit"], a: 1 },
        { q: "Which is a Storage device?", o: ["RAM", "ROM", "Hard Disk", "Cache"], a: 2 },
        { q: "Internet protocol:", o: ["HTTP", "FTP", "TCP/IP", "HTML"], a: 2 },
        { q: "ROM stands for:", o: ["Read Only Memory", "Random Output Memory", "Read Open Memory", "Run Only Memory"], a: 0 },
        { q: "Which memory is fastest?", o: ["Hard disk", "RAM", "Cache", "ROM"], a: 2 },
        { q: "Device used to print:", o: ["Monitor", "Scanner", "Printer", "Mouse"], a: 2 },
        { q: "Example of operating system:", o: ["MS Word", "Excel", "Windows", "Paint"], a: 2 },
        { q: "Temporary memory is:", o: ["ROM", "Hard disk", "CD", "RAM"], a: 3 },
        { q: "Which is NOT an input device?", o: ["Mouse", "Keyboard", "Scanner", "Monitor"], a: 3 },
        { q: "GUI stands for:", o: ["General User Interface", "Graphical User Interface", "Global User Internet", "Graphic Utility Interface"], a: 1 },
        { q: "Brain of CPU is:", o: ["CU", "ALU", "Register", "Cache"], a: 0 },
        { q: "ALU performs:", o: ["Storage", "Input", "Output", "Arithmetic & Logic"], a: 3 },
        { q: "CU stands for:", o: ["Central Unit", "Control Unit", "Core Unit", "Computer Unit"], a: 1 },
        { q: "Which is secondary storage?", o: ["RAM", "Cache", "Register", "Hard disk"], a: 3 },
        { q: "1 MB =", o: ["1024 KB", "1000 KB", "512 KB", "2048 KB"], a: 0 },
        { q: "Internet is example of:", o: ["LAN", "MAN", "WAN", "PAN"], a: 2 },
        { q: "HTML is used for:", o: ["Programming", "Styling", "Web page structure", "Database"], a: 2 },
        { q: "CSS is used for:", o: ["Logic", "Styling", "Database", "Security"], a: 1 },
        { q: "Which is a search engine?", o: ["Chrome", "Google", "Windows", "Android"], a: 1 },
        { q: "Which is NOT software?", o: ["MS Word", "Windows", "Linux", "Mouse"], a: 3 },
        { q: "Virus is a:", o: ["Hardware fault", "Software error", "Malicious program", "Input device"], a: 2 },
        { q: "Antivirus is used to:", o: ["Create virus", "Speed computer", "Remove virus", "Print files"], a: 2 },
        { q: "Email is used for:", o: ["Gaming", "Messaging", "Printing", "Drawing"], a: 1 },
        { q: "WWW stands for:", o: ["World Wide Web", "Wide World Web", "Web World Wide", "World Web Wide"], a: 0 },
        { q: "Browser example:", o: ["Google", "Chrome", "Yahoo", "Windows"], a: 1 },
        { q: "Which key deletes left character?", o: ["Enter", "Shift", "Backspace", "Space"], a: 2 },
        { q: "Spreadsheet software:", o: ["Word", "PowerPoint", "Excel", "Paint"], a: 2 },
        { q: "Presentation software:", o: ["Excel", "Word", "PowerPoint", "Access"], a: 2 },
        { q: "Device used to store data permanently:", o: ["RAM", "Register", "Cache", "Hard disk"], a: 3 },
        { q: "Binary digit is called:", o: ["Byte", "Bit", "Nibble", "Word"], a: 1 },
        { q: "8 bits make one:", o: ["KB", "MB", "Byte", "Nibble"], a: 2 },
        { q: "Computer works on:", o: ["Decimal system", "Binary system", "Octal system", "Hex system"], a: 1 },
        { q: "Which is system software?", o: ["MS Word", "Paint", "Windows", "Excel"], a: 2 },
        { q: "Which key is used to start new line?", o: ["Shift", "Enter", "Ctrl", "Alt"], a: 1 },
        { q: "USB stands for:", o: ["Universal Serial Bus", "United System Bus", "Universal System Byte", "Unified Serial Bus"], a: 0 },
        { q: "Which is NOT a storage device?", o: ["CD", "DVD", "Hard disk", "Printer"], a: 3 },
        { q: "Data processed becomes:", o: ["Input", "Output", "Program", "Virus"], a: 1 },
        { q: "Main page of website is called:", o: ["End page", "Index page", "Home page", "Web page"], a: 2 },
        { q: "Password is used for:", o: ["Speed", "Memory", "Security", "Storage"], a: 2 },
        { q: "LAN stands for:", o: ["Local Area Network", "Large Area Network", "Logical Area Network", "Long Area Network"], a: 0 },
        { q: "Modem is used for:", o: ["Printing", "Internet connection", "Storage", "Typing"], a: 1 },
        { q: "Which one is the File extension of MS Word?", o: [".xls", ".ppt", ".doc", ".exe"], a: 2 },
        { q: "Computer without software is:", o: ["Useful", "Fast", "Secure", "Useless"], a: 3 },
        { q: "Temporary memory:", o: ["ROM", "RAM", "HDD", "SSD"], a: 1 },
        { q: "Brain of computer:", o: ["Monitor", "CPU", "Mouse", "Printer"], a: 1 },
        { q: "Example of system software:", o: ["MS Word", "Windows", "Paint", "Chrome"], a: 1 },
        { q: "1 byte = ?", o: ["4 bits", "8 bits", "16 bits", "32 bits"], a: 1 },
        { q: "Device for typing:", o: ["Mouse", "Keyboard", "Scanner", "Speaker"], a: 1 },
        { q: "Computer works on:", o: ["Decimal", "Binary", "Octal", "Hexa"], a: 1 },
        { q: "Storage device:", o: ["Register", "Cache", "Hard disk", "ALU"], a: 2 },
        { q: "Full form of RAM:", o: ["Random Access Memory", "Read Access Memory", "Rapid Access Memory", "Run Access Memory"], a: 0 },
        { q: "Output device:", o: ["Mouse", "Keyboard", "Monitor", "Scanner"], a: 2 },
        { q: "Internet browser:", o: ["Windows", "Chrome", "Linux", "CPU"], a: 1 },
        { q: "Example of input device:", o: ["Printer", "Speaker", "Scanner", "Monitor"], a: 2 },
        { q: "CPU has parts:", o: ["1", "2", "3", "4"], a: 1 },
        { q: "ALU performs:", o: ["Storage", "Logic & arithmetic", "Input", "Output"], a: 1 },
        { q: "ROM is:", o: ["Volatile", "Non-volatile", "Temporary", "Changeable"], a: 1 },
        { q: "Email is used for:", o: ["Gaming", "Messaging", "Printing", "Storage"], a: 1 },
        { q: "GUI stands for:", o: ["Graphical User Interface", "General User Interface", "Global User Internet", "Graphic Utility Icon"], a: 0 },
        { q: "Example of hardware:", o: ["MS Word", "Windows", "CPU", "Google"], a: 2 },
        { q: "Cloud storage example:", o: ["RAM", "ROM", "Google Drive", "CPU"], a: 2 },
        { q: "OS controls:", o: ["Only hardware", "Only software", "Both hardware & software", "Internet only"], a: 2 },
        { q: "Save shortcut key:", o: ["Ctrl + A", "Ctrl + S", "Ctrl + V", "Ctrl + C"], a: 1 }
    ],
        medium: [
            { q: "Which memory is fastest?", o: ["RAM", "Cache", "Hard Disk", "ROM"], a: 1 },
            { q: "Which device converts digital to analog signals?", o: ["Modem", "Router", "Switch", "Hub"], a: 0 },
            { q: "SSD stands for:", o: ["Solid State Drive", "Secondary Storage Disk", "System Storage Device", "Secure Storage Drive"], a: 0 },
            { q: "Which is NOT an operating system?", o: ["Linux", "Windows", "MS Word", "Android"], a: 2 },
            { q: "Which key refreshes a webpage?", o: ["F2", "F5", "F7", "F12"], a: 1 },
            { q: "LAN covers an area of:", o: ["Country", "City", "Building", "World"], a: 2 },
            { q: "Main circuit board of computer is:", o: ["CPU", "RAM", "Motherboard", "Hard disk"], a: 2 },
            { q: "Which is volatile memory?", o: ["ROM", "HDD", "RAM", "SSD"], a: 2 },
            { q: "Binary equivalent of decimal 2 is:", o: ["01", "10", "11", "00"], a: 1 },
            { q: "Which unit controls all operations?", o: ["ALU", "CU", "RAM", "Register"], a: 1 },
            { q: "Which storage is removable?", o: ["SSD", "RAM", "USB", "Cache"], a: 2 },
            { q: "Which is NOT an input device?", o: ["Webcam", "Scanner", "Plotter", "Microphone"], a: 2 },
            { q: "File extension of MS Word:", o: [".ppt", ".xls", ".doc", ".exe"], a: 2 },
            { q: "Which is an example of firmware?", o: ["Windows", "BIOS", "Linux", "Chrome"], a: 1 },
            { q: "Which part performs calculations?", o: ["CU", "ALU", "RAM", "ROM"], a: 1 },
            { q: "Which language computer understands directly?", o: ["High level", "Assembly", "Machine", "Python"], a: 2 },
            { q: "Which is system software?", o: ["Paint", "Excel", "Operating System", "Browser"], a: 2 },
            { q: "Which network device connects networks?", o: ["Switch", "Hub", "Router", "Repeater"], a: 2 },
            { q: "Which key combination copies text?", o: ["Ctrl+X", "Ctrl+C", "Ctrl+V", "Ctrl+Z"], a: 1 },
            { q: "Which is optical storage?", o: ["Pen drive", "SSD", "DVD", "HDD"], a: 2 },
            { q: "1 MB equals:", o: ["1000 KB", "1024 KB", "512 KB", "2048 KB"], a: 1 },
            { q: "Which is application software?", o: ["Linux", "BIOS", "Photoshop", "Compiler"], a: 2 },
            { q: "Which device prints without ink?", o: ["Inkjet", "Laser", "Dot matrix", "Thermal"], a: 3 },
            { q: "Which memory stores startup instructions?", o: ["RAM", "Cache", "ROM", "Register"], a: 2 },
            { q: "Which is NOT a browser?", o: ["Chrome", "Firefox", "Edge", "Windows"], a: 3 },
            { q: "Which device boosts Wi-Fi signal?", o: ["Modem", "Router", "Repeater", "Switch"], a: 2 },
            { q: "Which port is used for display?", o: ["USB", "HDMI", "LAN", "Audio"], a: 1 },
            { q: "Which is secondary storage?", o: ["Cache", "Register", "Hard Disk", "ALU"], a: 2 },
            { q: "GUI uses:", o: ["Commands", "Icons", "Codes", "Numbers"], a: 1 },
            { q: "Which software protects from viruses?", o: ["OS", "Antivirus", "Browser", "Compiler"], a: 1 },
            { q: "Which unit stores temporary results?", o: ["RAM", "Register", "ROM", "HDD"], a: 1 },
            { q: "Which is NOT hardware?", o: ["Keyboard", "CPU", "Monitor", "Windows"], a: 3 },
            { q: "Which type of printer is fastest?", o: ["Inkjet", "Dot matrix", "Laser", "Thermal"], a: 2 },
            { q: "Which network covers city?", o: ["LAN", "PAN", "MAN", "WAN"], a: 2 },
            { q: "Which file stores data permanently?", o: ["Cache", "RAM", "ROM", "Hard disk"], a: 3 },
            { q: "Which key deletes text on left?", o: ["Delete", "Backspace", "Enter", "Shift"], a: 1 },
            { q: "Which device measures mouse movement?", o: ["Roller", "Sensor", "CPU", "Cache"], a: 1 },
            { q: "Which is an output device?", o: ["Scanner", "Microphone", "Projector", "Keyboard"], a: 2 },
            { q: "Which software translates code?", o: ["OS", "Compiler", "Browser", "Player"], a: 1 },
            { q: "Which is a programming language?", o: ["HTML", "HTTP", "CPU", "ROM"], a: 0 },
            { q: "Which device stores backup?", o: ["RAM", "SSD", "Cloud", "Cache"], a: 2 },
            { q: "Which key opens Run box?", o: ["Ctrl+R", "Win+R", "Alt+R", "Shift+R"], a: 1 },
            { q: "Which unit synchronizes operations?", o: ["Clock", "ALU", "RAM", "ROM"], a: 0 },
            { q: "Which memory is non-volatile?", o: ["Cache", "RAM", "ROM", "Register"], a: 2 },
            { q: "Which is NOT storage unit?", o: ["Bit", "Byte", "Meter", "KB"], a: 2 },
            { q: "Which device converts hard copy to soft copy?", o: ["Printer", "Scanner", "Monitor", "Plotter"], a: 1 },
            { q: "Which software controls hardware?", o: ["Application", "OS", "Utility", "Driver"], a: 3 },
            { q: "Which is NOT a search engine?", o: ["Google", "Bing", "Chrome", "DuckDuckGo"], a: 2 },
            { q: "Which key locks uppercase?", o: ["Shift", "Ctrl", "Caps Lock", "Alt"], a: 2 },
            { q: "Which port is for internet cable?", o: ["HDMI", "LAN", "USB", "VGA"], a: 1 },
            { q: "Which device connects computers in LAN?", o: ["Router", "Switch", "Modem", "Firewall"], a: 1 },
            { q: "Which software compresses files?", o: ["WinRAR", "Paint", "Chrome", "Word"], a: 0 },
            { q: "Which unit measures CPU speed?", o: ["Hz", "Watt", "Byte", "Volt"], a: 0 },
            { q: "Which device displays output on wall?", o: ["Monitor", "Printer", "Projector", "Speaker"], a: 2 },
            { q: "Which memory is closest to CPU?", o: ["RAM", "Cache", "ROM", "HDD"], a: 1 },
            { q: "Which OS is open-source?", o: ["Windows", "Linux", "macOS", "DOS"], a: 1 },
            { q: "Which extension is for images?", o: [".txt", ".jpg", ".exe", ".doc"], a: 1 },
            { q: "Which network is worldwide?", o: ["LAN", "MAN", "PAN", "WAN"], a: 3 },
            { q: "Which device records video?", o: ["Scanner", "Webcam", "Mouse", "Printer"], a: 1 },
            { q: "Which key selects all?", o: ["Ctrl+A", "Ctrl+S", "Ctrl+Z", "Ctrl+X"], a: 0 },
            { q: "Which software manages files?", o: ["Browser", "File Explorer", "Antivirus", "Player"], a: 1 },
            { q: "Which is communication software?", o: ["Zoom", "Paint", "Notepad", "BIOS"], a: 0 },
            { q: "Which unit stores instructions?", o: ["CPU", "Memory", "Keyboard", "Monitor"], a: 1 },
            { q: "Which is NOT utility software?", o: ["Antivirus", "Disk Cleanup", "Backup tool", "MS Word"], a: 3 },
            { q: "Which memory loses data on power off?", o: ["ROM", "RAM", "SSD", "HDD"], a: 1 },
            { q: "Which key opens task manager?", o: ["Ctrl+Alt+Del", "Ctrl+C", "Alt+F4", "Ctrl+V"], a: 0 },
            { q: "Which device connects ISP?", o: ["Router", "Modem", "Switch", "Hub"], a: 1 },
            { q: "Which software edits videos?", o: ["Premiere", "BIOS", "OS", "Compiler"], a: 0 },
            { q: "Which unit executes instructions?", o: ["RAM", "ALU", "CPU", "Register"], a: 2 },
            { q: "Which symbol starts email address?", o: ["#", "@", "$", "&"], a: 1 }
        ],
        hard: [
            { q: "Which memory uses SRAM?", o: ["RAM", "Cache", "ROM", "HDD"], a: 1 },
            { q: "Which addressing mode is fastest?", o: ["Direct", "Indirect", "Immediate", "Register"], a: 3 },
            { q: "Which is NOT part of CPU?", o: ["ALU", "CU", "Register", "RAM"], a: 3 },
            { q: "Which topology uses central device?", o: ["Bus", "Ring", "Star", "Mesh"], a: 2 },
            { q: "Which OS supports multitasking?", o: ["DOS", "Windows", "BIOS", "Firmware"], a: 1 },
            { q: "Which unit decodes instructions?", o: ["ALU", "CU", "RAM", "Cache"], a: 1 },
            { q: "Which memory is read-only?", o: ["RAM", "ROM", "Cache", "Register"], a: 1 },
            { q: "Which protocol secures web?", o: ["HTTP", "FTP", "HTTPS", "SMTP"], a: 2 },
            { q: "Which is NOT high-level language?", o: ["C++", "Java", "Python", "Assembly"], a: 3 },
            { q: "Which device filters network traffic?", o: ["Router", "Firewall", "Switch", "Hub"], a: 1 },
            { q: "Which logic gate outputs 1 when inputs differ?", o: ["AND", "OR", "XOR", "NOT"], a: 2 },
            { q: "Which number system base is hexadecimal?", o: ["2", "8", "10", "16"], a: 3 },
            { q: "Which memory is used in embedded systems?", o: ["HDD", "RAM", "Flash", "Cache"], a: 2 },
            { q: "Which software manages hardware interrupts?", o: ["Application", "OS", "Compiler", "Driver"], a: 1 },
            { q: "Which device reduces network collision?", o: ["Hub", "Switch", "Modem", "Repeater"], a: 1 },
            { q: "Which is NOT an OS function?", o: ["Memory management", "File management", "Printing documents", "Process management"], a: 2 },
            { q: "Which unit holds next instruction?", o: ["IR", "PC", "MAR", "MDR"], a: 1 },
            { q: "Which port number is HTTP?", o: ["21", "25", "80", "443"], a: 2 },
            { q: "Which storage has no moving parts?", o: ["HDD", "DVD", "SSD", "CD"], a: 2 },
            { q: "Which OS is command-line based?", o: ["Windows", "Linux GUI", "DOS", "Android"], a: 2 },
            { q: "Which is NOT compiler type?", o: ["Single-pass", "Two-pass", "Interpreter", "Multi-pass"], a: 2 },
            { q: "Which unit converts AC to DC?", o: ["SMPS", "CPU", "ALU", "RAM"], a: 0 },
            { q: "Which logic gate inverts input?", o: ["AND", "OR", "NOT", "XOR"], a: 2 },
            { q: "Which address identifies device on network?", o: ["MAC", "IP", "URL", "DNS"], a: 0 },
            { q: "Which memory is fastest after registers?", o: ["RAM", "Cache", "ROM", "SSD"], a: 1 },
            { q: "Which topology is most reliable?", o: ["Bus", "Ring", "Star", "Mesh"], a: 3 },
            { q: "Which OS supports real-time tasks?", o: ["Windows", "Linux", "RTOS", "DOS"], a: 2 },
            { q: "Which protocol sends emails?", o: ["FTP", "HTTP", "SMTP", "POP"], a: 2 },
            { q: "Which software translates one line at a time?", o: ["Compiler", "Interpreter", "Assembler", "Loader"], a: 1 },
            { q: "Which unit stores memory address?", o: ["MAR", "MDR", "IR", "PC"], a: 0 },
            { q: "Which number system uses digits 0–7?", o: ["Binary", "Decimal", "Octal", "Hex"], a: 2 },
            { q: "Which attack steals user data?", o: ["Firewall", "Phishing", "Encryption", "Backup"], a: 1 },
            { q: "Which memory stores BIOS?", o: ["RAM", "ROM", "Cache", "Register"], a: 1 },
            { q: "Which unit manages I/O devices?", o: ["CU", "OS", "ALU", "Cache"], a: 1 },
            { q: "Which protocol resolves IP to MAC?", o: ["DNS", "ARP", "FTP", "SMTP"], a: 1 },
            { q: "Which file system used by Windows?", o: ["FAT", "NTFS", "EXT4", "HFS"], a: 1 },
            { q: "Which unit stores current instruction?", o: ["IR", "PC", "MAR", "MDR"], a: 0 },
            { q: "Which device measures packet speed?", o: ["Hub", "Switch", "Router", "NIC"], a: 3 },
            { q: "Which is NOT cybersecurity tool?", o: ["Firewall", "Antivirus", "Backup", "Malware"], a: 3 },
            { q: "Which memory is closest to ALU?", o: ["Cache", "RAM", "ROM", "HDD"], a: 0 },
            { q: "Which OS is mobile-based?", o: ["Linux", "DOS", "Android", "UNIX"], a: 2 },
            { q: "Which topology fails if central node fails?", o: ["Bus", "Ring", "Star", "Mesh"], a: 2 },
            { q: "Which software creates machine code?", o: ["Editor", "Compiler", "Browser", "OS"], a: 1 },
            { q: "Which unit stores temporary instructions?", o: ["Register", "ROM", "HDD", "SSD"], a: 0 },
            { q: "Which memory uses DRAM?", o: ["Cache", "RAM", "ROM", "Register"], a: 1 },
            { q: "Which protocol transfers files?", o: ["HTTP", "FTP", "SMTP", "POP"], a: 1 },
            { q: "Which attack overloads server?", o: ["Phishing", "Malware", "DDoS", "Spyware"], a: 2 },
            { q: "Which key closes window?", o: ["Ctrl+Q", "Alt+F4", "Ctrl+Alt", "Shift+F4"], a: 1 },
            { q: "Which is NOT programming language?", o: ["Python", "Java", "HTML", "CPU"], a: 3 },
            { q: "Which unit synchronizes CPU cycles?", o: ["Clock", "ALU", "RAM", "ROM"], a: 0 },
            { q: "Which memory stores bootloader?", o: ["RAM", "ROM", "HDD", "Cache"], a: 1 },
            { q: "Which device enables wireless LAN?", o: ["NIC", "Router", "Access Point", "Switch"], a: 2 },
            { q: "Which OS uses kernel?", o: ["All modern OS", "DOS only", "BIOS", "Firmware"], a: 0 },
            { q: "Which is NOT number system?", o: ["Binary", "Decimal", "Hexadecimal", "Algorithm"], a: 3 },
            { q: "Which unit performs logical comparisons?", o: ["CU", "ALU", "RAM", "ROM"], a: 1 },
            { q: "Which storage is cloud-based?", o: ["HDD", "SSD", "Google Drive", "Cache"], a: 2 },
            { q: "Which address is physical?", o: ["IP", "URL", "MAC", "DNS"], a: 2 },
            { q: "Which OS supports multi-user?", o: ["DOS", "Linux", "BIOS", "Firmware"], a: 1 },
            { q: "Which software schedules processes?", o: ["Browser", "OS", "Compiler", "Editor"], a: 1 },
            { q: "Which memory has highest cost per bit?", o: ["HDD", "SSD", "RAM", "Cache"], a: 3 },
            { q: "Which protocol receives email?", o: ["SMTP", "FTP", "POP3", "HTTP"], a: 2 },
            { q: "Which unit stores return address?", o: ["Stack", "Heap", "Cache", "ROM"], a: 0 },
            { q: "Which topology uses backbone cable?", o: ["Star", "Ring", "Bus", "Mesh"], a: 2 },
            { q: "Which OS is text-based?", o: ["Windows", "Linux GUI", "DOS", "Android"], a: 2 },
            { q: "Which memory is used for virtual memory?", o: ["Cache", "RAM", "HDD", "Register"], a: 2 },
            { q: "Which software manages memory allocation?", o: ["Compiler", "OS", "Browser", "Player"], a: 1 },
            { q: "Which unit fetches instruction?", o: ["CU", "ALU", "RAM", "Clock"], a: 0 },
            { q: "Which attack records keystrokes?", o: ["Virus", "Worm", "Keylogger", "Firewall"], a: 2 },
            { q: "Which OS is open-source?", o: ["Windows", "macOS", "Linux", "iOS"], a: 2 },
            { q: "Which memory is fastest overall?", o: ["Cache", "RAM", "Register", "ROM"], a: 2 }
        ]
    },
    biology: {
        easy: [
        { q: "Basic unit of life is:", o: ["Tissue", "Cell", "Organ", "System"], a: 1 },
        { q: "Powerhouse of the cell is:", o: ["Ribosome", "Mitochondria", "Nucleus", "Golgi body"], a: 1 },
        { q: "Cell wall is present in:", o: ["Animal cell", "Plant cell", "Human cell", "Bacterial virus"], a: 1 },
        { q: "DNA is present in:", o: ["Cytoplasm", "Cell wall", "Nucleus", "Ribosome"], a: 2 },
        { q: "Photosynthesis occurs in:", o: ["Mitochondria", "Chloroplast", "Nucleus", "Vacuole"], a: 1 },
        { q: "Green pigment in plants is:", o: ["Carotene", "Xanthophyll", "Chlorophyll", "Melanin"], a: 2 },
        { q: "Blood group discovered by:", o: ["Mendel", "Darwin", "Landsteiner", "Watson"], a: 2 },
        { q: "Red blood cells contain:", o: ["Insulin", "Hemoglobin", "Plasma", "Antibody"], a: 1 },
        { q: "Normal human body temperature is:", o: ["35°C", "36°C", "37°C", "38°C"], a: 2 },
        { q: "Organ for respiration in humans:", o: ["Heart", "Lungs", "Liver", "Kidney"], a: 1 },
        { q: "Unit of heredity is:", o: ["Chromosome", "Gene", "DNA", "Cell"], a: 1 },
        { q: "Mendel worked on:", o: ["Wheat", "Maize", "Pea plant", "Rice"], a: 2 },
        { q: "Dominant trait is expressed in:", o: ["Homozygous only", "Heterozygous", "Recessive", "Mutant"], a: 1 },
        { q: "Enzymes are made of:", o: ["Carbohydrates", "Fats", "Proteins", "Vitamins"], a: 2 },
        { q: "Human heart has chambers:", o: ["2", "3", "4", "5"], a: 2 },
        { q: "Smallest bone in human body:", o: ["Femur", "Stapes", "Ulna", "Tibia"], a: 1 },
        { q: "Vitamin C deficiency causes:", o: ["Rickets", "Night blindness", "Scurvy", "Beriberi"], a: 2 },
        { q: "Site of protein synthesis:", o: ["Ribosome", "Lysosome", "Golgi", "Vacuole"], a: 0 },
        { q: "Plants store food as:", o: ["Glucose", "Sucrose", "Starch", "Cellulose"], a: 2 },
        { q: "White blood cells function:", o: ["Oxygen transport", "Digestion", "Defense", "Clotting"], a: 2 },
        { q: "Largest organ of human body:", o: ["Liver", "Skin", "Brain", "Lung"], a: 1 },
        { q: "Blood clotting requires:", o: ["Iron", "Calcium", "Sodium", "Potassium"], a: 1 },
        { q: "Digestion of proteins starts in:", o: ["Mouth", "Stomach", "Intestine", "Liver"], a: 1 },
        { q: "Pancreas secretes:", o: ["Bile", "Insulin", "Pepsin", "Amylase"], a: 1 },
        { q: "Bile is stored in:", o: ["Liver", "Gall bladder", "Pancreas", "Stomach"], a: 1 },
        { q: "Normal pH of blood is about:", o: ["6.8", "7.0", "7.4", "8.0"], a: 2 },
        { q: "Male reproductive cell is:", o: ["Ovum", "Zygote", "Sperm", "Embryo"], a: 2 },
        { q: "Female reproductive cell is:", o: ["Ovum", "Sperm", "Zygote", "Foetus"], a: 0 },
        { q: "Number of chromosomes in humans:", o: ["23", "44", "46", "48"], a: 2 },
        { q: "Excretion in plants occurs through:", o: ["Roots", "Stomata", "Flowers", "Fruits"], a: 1 },
        { q: "Transpiration occurs through:", o: ["Roots", "Stem", "Stomata", "Xylem"], a: 2 },
        { q: "Xylem transports:", o: ["Food", "Water", "Oxygen", "Hormones"], a: 1 },
        { q: "Phloem transports:", o: ["Water", "Minerals", "Food", "Oxygen"], a: 2 },
        { q: "Breathing is a:", o: ["Chemical process", "Physical process", "Biological process", "Mechanical process"], a: 1 },
        { q: "Aerobic respiration needs:", o: ["Nitrogen", "Carbon dioxide", "Oxygen", "Hydrogen"], a: 2 },
        { q: "Anaerobic respiration produces:", o: ["CO₂ only", "Oxygen", "Lactic acid / alcohol", "Water only"], a: 2 },
        { q: "Virus is:", o: ["Cellular", "Non-cellular", "Multicellular", "Plant"], a: 1 },
        { q: "AIDS is caused by:", o: ["Bacteria", "Fungus", "Virus", "Protozoa"], a: 2 },
        { q: "Study of plants is called:", o: ["Zoology", "Botany", "Ecology", "Genetics"], a: 1 },
        { q: "Study of heredity is:", o: ["Anatomy", "Physiology", "Genetics", "Cytology"], a: 2 },
        { q: "Human skeleton has bones:", o: ["200", "206", "210", "212"], a: 1 },
        { q: "Inhaled air has more:", o: ["CO₂", "Oxygen", "Nitrogen", "Water vapor"], a: 1 },
        { q: "Exhaled air has more:", o: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"], a: 2 },
        { q: "Main function of roots:", o: ["Photosynthesis", "Support & absorption", "Respiration", "Reproduction"], a: 1 },
        { q: "Seed germination needs:", o: ["Light only", "Oxygen, water", "CO₂ only", "Soil only"], a: 1 },
        { q: "Largest gland in human body:", o: ["Pancreas", "Thyroid", "Liver", "Pituitary"], a: 2 },
        { q: "Hormones are secreted by:", o: ["Duct glands", "Endocrine glands", "Exocrine glands", "Salivary glands"], a: 1 },
        { q: "Sense organ for hearing:", o: ["Eye", "Ear", "Nose", "Skin"], a: 1 },
        { q: "Night blindness is due to deficiency of:", o: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], a: 0 },
        { q: "Balance of body is controlled by:", o: ["Cerebrum", "Medulla", "Cerebellum", "Spinal cord"], a: 2 },
        { q: "Site of cellular respiration is:", o: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"], a: 2 },
        { q: "Which blood group is universal donor?", o: ["A", "B", "AB", "O"], a: 3 },
        { q: "Which part of brain controls breathing?", o: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Spinal cord"], a: 2 },
        { q: "Deficiency of Vitamin D causes:", o: ["Scurvy", "Rickets", "Beriberi", "Night blindness"], a: 1 },
        { q: "Human eye lens is:", o: ["Concave", "Convex", "Plane", "Cylindrical"], a: 1 },
        { q: "Which tissue transports food in plants?", o: ["Xylem", "Phloem", "Cortex", "Cambium"], a: 1 },
        { q: "Which organ detoxifies blood?", o: ["Kidney", "Liver", "Lung", "Heart"], a: 1 },
        { q: "Oxygen is transported by:", o: ["Plasma", "Platelets", "Hemoglobin", "WBCs"], a: 2 },
        { q: "Functional unit of kidney:", o: ["Neuron", "Nephron", "Alveolus", "Villus"], a: 1 },
        { q: "Which gas is released in photosynthesis?", o: ["CO₂", "Oxygen", "Nitrogen", "Hydrogen"], a: 1 },
        { q: "Longest bone in human body:", o: ["Humerus", "Radius", "Femur", "Tibia"], a: 2 },
        { q: "Which process removes waste from body?", o: ["Respiration", "Nutrition", "Excretion", "Circulation"], a: 2 },
        { q: "Human blood is slightly:", o: ["Acidic", "Neutral", "Basic", "Salty"], a: 2 },
        { q: "Which cell lacks nucleus?", o: ["WBC", "RBC", "Nerve cell", "Muscle cell"], a: 1 },
        { q: "Enzyme in saliva is:", o: ["Pepsin", "Trypsin", "Amylase", "Lipase"], a: 2 },
        { q: "Which part connects brain to body?", o: ["Cerebrum", "Cerebellum", "Spinal cord", "Medulla"], a: 2 },
        { q: "Main function of leaves:", o: ["Respiration", "Transpiration", "Photosynthesis", "Storage"], a: 2 },
        { q: "Disease caused by bacteria:", o: ["Malaria", "Dengue", "Tuberculosis", "AIDS"], a: 2 },
        { q: "Which organ pumps blood?", o: ["Lung", "Brain", "Heart", "Liver"], a: 2 },
        { q: "Study of cells is called:", o: ["Anatomy", "Cytology", "Ecology", "Physiology"], a: 1 }
        ],
        medium: [
            { q: "The basic unit of life is:", o: ["Atom", "Cell", "Molecule", "Tissue"], a: 1 },
            { q: "DNA is found in:", o: ["Cytoplasm", "Nucleus", "Ribosome", "Mitochondria"], a: 1 },
            { q: "Which organelle is called the powerhouse of the cell?", o: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"], a: 2 },
            { q: "Photosynthesis occurs in:", o: ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"], a: 1 },
            { q: "Which gas is released during photosynthesis?", o: ["CO₂", "O₂", "N₂", "H₂"], a: 1 },
            { q: "The sequence of nitrogenous bases in DNA determines:", o: ["Protein type", "Carbohydrate type", "Lipid type", "Water content"], a: 0 },
            { q: "Which blood cells fight infection?", o: ["RBCs", "WBCs", "Platelets", "Plasma"], a: 1 },
            { q: "Platelets help in:", o: ["Oxygen transport", "Blood clotting", "Fighting infection", "Hormone transport"], a: 1 },
            { q: "The functional unit of the kidney is:", o: ["Nephron", "Glomerulus", "Ureter", "Bowman’s capsule"], a: 0 },
            { q: "Which hormone regulates blood sugar level?", o: ["Insulin", "Adrenaline", "Thyroxine", "Growth hormone"], a: 0 },
            { q: "Enzymes are:", o: ["Proteins", "Carbohydrates", "Lipids", "Nucleic acids"], a: 0 },
            { q: "The process of breaking down glucose into energy is:", o: ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"], a: 1 },
            { q: "Aerobic respiration occurs in:", o: ["Cytoplasm", "Mitochondria", "Nucleus", "Ribosome"], a: 1 },
            { q: "Plants absorb water mainly through:", o: ["Stem", "Leaves", "Roots", "Flowers"], a: 2 },
            { q: "Xylem transports:", o: ["Water", "Food", "Hormones", "Minerals only"], a: 0 },
            { q: "Phloem transports:", o: ["Water", "Food", "Oxygen", "Hormones"], a: 1 },
            { q: "Which kingdom has unicellular eukaryotes?", o: ["Protista", "Plantae", "Fungi", "Animalia"], a: 0 },
            { q: "Amoeba moves by:", o: ["Cilia", "Flagella", "Pseudopodia", "None"], a: 2 },
            { q: "Which organ produces bile?", o: ["Pancreas", "Liver", "Stomach", "Small intestine"], a: 1 },
            { q: "The main site of digestion is:", o: ["Stomach", "Small intestine", "Mouth", "Large intestine"], a: 1 },
            { q: "Protein digestion starts in:", o: ["Mouth", "Stomach", "Small intestine", "Esophagus"], a: 1 },
            { q: "The nerve cell is called:", o: ["Neuron", "Axon", "Dendrite", "Synapse"], a: 0 },
            { q: "Synapse is:", o: ["Gap between neurons", "End of neuron", "Brain cell", "Axon tip"], a: 0 },
            { q: "The largest organ in human body is:", o: ["Liver", "Skin", "Heart", "Lung"], a: 1 },
            { q: "Blood group with both A and B antigens is:", o: ["O", "AB", "A", "B"], a: 1 },
            { q: "The smallest bone in human body is:", o: ["Femur", "Stapes", "Tibia", "Ulna"], a: 1 },
            { q: "The human heart has how many chambers?", o: ["2", "3", "4", "5"], a: 2 },
            { q: "The largest artery in the body is:", o: ["Pulmonary artery", "Aorta", "Carotid", "Femoral"], a: 1 },
            { q: "The basic function of red blood cells is:", o: ["Immunity", "Oxygen transport", "Clotting", "Hormone transport"], a: 1 },
            { q: "Lymph is mainly composed of:", o: ["RBCs", "Plasma", "WBCs", "Platelets"], a: 1 },
            { q: "The excretory product of plants is:", o: ["Urea", "Oxygen", "CO₂", "Water"], a: 3 },
            { q: "The excretory system in humans is called:", o: ["Digestive system", "Urinary system", "Circulatory system", "Nervous system"], a: 1 },
            { q: "The hormone secreted by adrenal glands is:", o: ["Adrenaline", "Insulin", "Thyroxine", "Estrogen"], a: 0 },
            { q: "The hormone responsible for growth is:", o: ["Growth hormone", "Thyroxine", "Insulin", "Adrenaline"], a: 0 },
            { q: "The site of protein synthesis is:", o: ["Ribosome", "Nucleus", "Mitochondria", "Golgi apparatus"], a: 0 },
            { q: "The term “genome” refers to:", o: ["Complete set of proteins", "Complete set of genes", "DNA only", "RNA only"], a: 1 },
            { q: "RNA differs from DNA because it:", o: ["Is single-stranded", "Has thymine", "Cannot leave nucleus", "Is double-stranded"], a: 0 },
            { q: "Mendel is known for:", o: ["Laws of inheritance", "Evolution", "Natural selection", "Cell theory"], a: 0 },
            { q: "Variation arises due to:", o: ["Mutation", "Environment", "Both", "None"], a: 2 },
            { q: "The term “haploid” means:", o: ["One set of chromosomes", "Two sets", "Three sets", "Four sets"], a: 0 },
            { q: "Fertilization restores:", o: ["Haploid state", "Diploid state", "Triploid state", "Tetraploid state"], a: 1 },
            { q: "The male gamete in plants is:", o: ["Pollen", "Ovule", "Embryo sac", "Zygote"], a: 0 },
            { q: "The female gamete in plants is:", o: ["Ovule", "Pollen", "Zygote", "Embryo"], a: 0 },
            { q: "The oxygen released in photosynthesis comes from:", o: ["CO₂", "Water", "Glucose", "Chlorophyll"], a: 1 },
            { q: "Plants store energy in the form of:", o: ["Glucose", "Starch", "Protein", "Lipid"], a: 1 },
            { q: "The opening on leaves for gas exchange is:", o: ["Stomata", "Lenticels", "Cuticle", "Veins"], a: 0 },
            { q: "Which of these is a non-vascular plant?", o: ["Moss", "Fern", "Grass", "Oak"], a: 0 },
            { q: "Xylem is composed of:", o: ["Tracheids and vessels", "Phloem fibers", "Guard cells", "Stomata"], a: 0 },
            { q: "Phloem is composed of:", o: ["Sieve tubes and companion cells", "Tracheids", "Guard cells", "Vessel elements"], a: 0 },
            { q: "The process of water movement in plants is:", o: ["Transpiration", "Photosynthesis", "Respiration", "Diffusion"], a: 0 },
            { q: "The movement of substances from high to low concentration is:", o: ["Diffusion", "Osmosis", "Active transport", "Endocytosis"], a: 0 },
            { q: "Osmosis is the movement of water through:", o: ["Semipermeable membrane", "Cell wall", "Cytoplasm", "Nucleus"], a: 0 },
            { q: "ATP is:", o: ["Energy currency of cell", "Genetic material", "Enzyme", "Hormone"], a: 0 },
            { q: "The codon is found in:", o: ["mRNA", "tRNA", "rRNA", "DNA"], a: 0 },
            { q: "Mutation leads to:", o: ["Variation", "Stability", "Death only", "None"], a: 0 },
            { q: "The theory of evolution was proposed by:", o: ["Darwin", "Mendel", "Watson", "Hooke"], a: 0 },
            { q: "Fossils provide evidence of:", o: ["Evolution", "Photosynthesis", "Respiration", "Inheritance"], a: 0 },
            { q: "The study of heredity is called:", o: ["Genetics", "Ecology", "Physiology", "Botany"], a: 0 },
            { q: "DNA replication occurs during:", o: ["S phase of cell cycle", "G1 phase", "M phase", "G2 phase"], a: 0 },
            { q: "Crossing over occurs in:", o: ["Prophase I of meiosis", "Metaphase", "Anaphase", "Telophase"], a: 0 },
            { q: "Spermatogenesis occurs in:", o: ["Testes", "Ovary", "Uterus", "Fallopian tube"], a: 0 },
            { q: "Oogenesis occurs in:", o: ["Ovary", "Testes", "Uterus", "Fallopian tube"], a: 0 },
            { q: "Which blood vessels have valves?", o: ["Veins", "Arteries", "Capillaries", "Aorta"], a: 0 },
            { q: "The heart is covered by:", o: ["Pericardium", "Endocardium", "Myocardium", "Epicardium"], a: 0 },
            { q: "Respiratory pigment in humans is:", o: ["Hemoglobin", "Myoglobin", "Chlorophyll", "Phycocyanin"], a: 0 },
            { q: "The smallest functional unit of kidney is:", o: ["Nephron", "Glomerulus", "Bowman’s capsule", "Tubule"], a: 0 },
            { q: "The site of gas exchange in lungs is:", o: ["Alveoli", "Bronchi", "Trachea", "Bronchioles"], a: 0 },
            { q: "The process of blood clotting is called:", o: ["Coagulation", "Diffusion", "Osmosis", "Fermentation"], a: 0 },
            { q: "Hormones are secreted by:", o: ["Endocrine glands", "Exocrine glands", "Cells", "Nerves"], a: 0 },
            { q: "The study of ecosystem interactions is:", o: ["Ecology", "Physiology", "Genetics", "Microbiology"], a: 0 }
        ],
        hard: [
            { q: "Mitochondrial DNA is inherited:", o: ["Maternal", "Paternal", "Both", "Randomly"], a: 0 },
            { q: "The lac operon is an example of:", o: ["Gene regulation in prokaryotes", "DNA replication", "Protein synthesis", "Mutation"], a: 0 },
            { q: "The backbone of DNA is made of:", o: ["Sugar-phosphate", "Nitrogenous bases", "Amino acids", "Nucleotides only"], a: 0 },
            { q: "DNA polymerase synthesizes DNA in:", o: ["5’ → 3’ direction", "3’ → 5’ direction", "Both", "None"], a: 0 },
            { q: "Which of these is a stop codon?", o: ["UAA", "AUG", "GCU", "ACC"], a: 0 },
            { q: "Operons are found in:", o: ["Prokaryotes", "Eukaryotes", "Both", "Viruses"], a: 0 },
            { q: "Crossing over increases:", o: ["Genetic variation", "Stability", "Protein synthesis", "Mutation rate"], a: 0 },
            { q: "Frameshift mutation is caused by:", o: ["Insertion or deletion", "Substitution", "Crossing over", "Duplication"], a: 0 },
            { q: "A codon codes for:", o: ["Amino acid", "Protein", "Enzyme", "tRNA"], a: 0 },
            { q: "Operons consist of:", o: ["Promoter, operator, structural genes", "DNA only", "Ribosome, RNA", "Enzyme, DNA"], a: 0 },
            { q: "tRNA carries:", o: ["Amino acids", "mRNA", "DNA", "Protein"], a: 0 },
            { q: "The poly-A tail is added to:", o: ["mRNA", "tRNA", "rRNA", "DNA"], a: 0 },
            { q: "The cap is added to:", o: ["mRNA", "tRNA", "rRNA", "DNA"], a: 0 },
            { q: "Splicing removes:", o: ["Introns", "Exons", "Codons", "Anticodons"], a: 0 },
            { q: "The central dogma is:", o: ["DNA → RNA → Protein", "Protein → RNA → DNA", "RNA → DNA → Protein", "None"], a: 0 },
            { q: "Repressor binds to:", o: ["Operator", "Promoter", "RNA polymerase", "DNA"], a: 0 },
            { q: "Enhancers increase:", o: ["Transcription rate", "Mutation rate", "Translation rate", "Replication rate"], a: 0 },
            { q: "Silencers decrease:", o: ["Transcription rate", "Translation rate", "Mutation rate", "Replication rate"], a: 0 },
            { q: "Gene expression is regulated at:", o: ["Transcription level", "Translation level", "Post-translation", "All"], a: 3 },
            { q: "Epigenetics involves:", o: ["Methylation and acetylation", "DNA mutation", "RNA splicing", "Protein folding"], a: 0 },
            { q: "The enzyme that unwinds DNA is:", o: ["Helicase", "Ligase", "Polymerase", "Gyrase"], a: 0 },
            { q: "DNA ligase:", o: ["Joins Okazaki fragments", "Synthesizes DNA", "Unwinds DNA", "Adds primers"], a: 0 },
            { q: "Okazaki fragments occur in:", o: ["Lagging strand", "Leading strand", "Both", "Neither"], a: 0 },
            { q: "Primase synthesizes:", o: ["RNA primer", "DNA fragment", "Protein", "tRNA"], a: 0 },
            { q: "Semi-conservative replication produces:", o: ["One old and one new strand", "Two new strands", "Two old strands", "None"], a: 0 },
            { q: "RNA primer is removed by:", o: ["DNA polymerase", "Ligase", "Helicase", "Primase"], a: 0 },
            { q: "Telomeres protect:", o: ["Chromosome ends", "DNA replication", "Transcription", "Translation"], a: 0 },
            { q: "Telomerase is active in:", o: ["Germ cells", "Somatic cells", "Both", "None"], a: 0 },
            { q: "Mutation in germ cells is:", o: ["Heritable", "Non-heritable", "Lethal always", "Neutral always"], a: 0 },
            { q: "Mutation in somatic cells is:", o: ["Non-heritable", "Heritable", "Lethal", "Neutral"], a: 0 },
            { q: "Transposons are:", o: ["Jumping genes", "DNA polymerases", "RNA viruses", "Proteins"], a: 0 },
            { q: "Plasmids are:", o: ["Extra-chromosomal DNA", "Ribosomes", "RNA only", "Enzymes"], a: 0 },
            { q: "The CRISPR-Cas9 system is used for:", o: ["Genome editing", "Protein synthesis", "Transcription", "Translation"], a: 0 },
            { q: "Restriction enzymes cut DNA at:", o: ["Specific sequences", "Random sequences", "Promoters", "Exons"], a: 0 },
            { q: "PCR amplifies:", o: ["DNA fragments", "RNA", "Proteins", "Lipids"], a: 0 },
            { q: "DNA fingerprinting uses:", o: ["STR regions", "Genes", "Exons only", "Introns only"], a: 0 },
            { q: "Stem cells can:", o: ["Differentiate into many cell types", "Only divide", "Die immediately", "Produce enzymes only"], a: 0 },
            { q: "Totipotent cells:", o: ["Form entire organism", "Form specific tissue", "Cannot divide", "Only form placenta"], a: 0 },
            { q: "Pluripotent cells:", o: ["Form any tissue but not whole organism", "Form entire organism", "Form only blood", "Cannot divide"], a: 0 },
            { q: "Multipotent stem cells:", o: ["Form few related cell types", "Form all tissues", "Form organism", "Cannot divide"], a: 0 },
            { q: "Homeostasis maintains:", o: ["Internal environment", "External environment", "Mutation rate", "DNA replication"], a: 0 },
            { q: "Negative feedback reduces:", o: ["Stimulus", "Hormone", "Protein synthesis", "Mutation"], a: 0 },
            { q: "Positive feedback enhances:", o: ["Stimulus", "Inhibits hormone", "Reduces growth", "None"], a: 0 },
            { q: "Insulin decreases:", o: ["Blood glucose", "Blood pressure", "Heart rate", "Blood cholesterol"], a: 0 },
            { q: "Glucagon increases:", o: ["Blood glucose", "Blood pressure", "Heart rate", "Protein synthesis"], a: 0 },
            { q: "ADH regulates:", o: ["Water reabsorption", "Blood glucose", "Heart rate", "Muscle contraction"], a: 0 },
            { q: "Thyroxine controls:", o: ["Metabolism", "Reproduction", "Growth only", "Oxygen transport"], a: 0 },
            { q: "Parathyroid hormone controls:", o: ["Calcium levels", "Glucose levels", "Sodium levels", "Potassium levels"], a: 0 },
            { q: "Vitamin D is synthesized in:", o: ["Skin", "Liver", "Kidney", "Pancreas"], a: 0 },
            { q: "Bacteria reproduce by:", o: ["Binary fission", "Mitosis", "Meiosis", "Budding"], a: 0 },
            { q: "Viruses are:", o: ["Acellular", "Prokaryotic", "Eukaryotic", "Fungi"], a: 0 },
            { q: "Viruses reproduce in:", o: ["Host cells", "Independently", "Soil", "Water"], a: 0 },
            { q: "Lysogenic cycle integrates viral DNA into:", o: ["Host genome", "Cytoplasm", "Ribosome", "Mitochondria"], a: 0 },
            { q: "Lytic cycle ends with:", o: ["Host cell lysis", "Host survives", "Viral dormancy", "Protein synthesis only"], a: 0 },
            { q: "Prions cause:", o: ["Neurodegenerative diseases", "Bacterial infections", "Viral infections", "Hormone imbalance"], a: 0 },
            { q: "Fungi obtain food by:", o: ["Absorption", "Photosynthesis", "Ingestion", "Diffusion"], a: 0 },
            { q: "Mycorrhizal fungi help plants by:", o: ["Increasing nutrient absorption", "Reducing photosynthesis", "Producing toxins", "Reducing water uptake"], a: 0 },
            { q: "Nitrogen-fixing bacteria convert N₂ to:", o: ["Ammonia", "Nitrate", "Nitrite", "Oxygen"], a: 0 },
            { q: "Biogeochemical cycles recycle:", o: ["Elements", "Energy", "Water only", "Proteins only"], a: 0 },
            { q: "Ecological succession leads to:", o: ["Climax community", "Extinction", "Mutation", "Decomposition"], a: 0 },
            { q: "Keystone species maintain:", o: ["Ecosystem stability", "Mutation rate", "Evolution", "Photosynthesis"], a: 0 },
            { q: "Biodiversity hotspot has:", o: ["High species richness", "Low species richness", "Only plants", "Only animals"], a: 0 },
            { q: "In genetic drift, allele frequency changes due to:", o: ["Random chance", "Selection pressure", "Mutation", "Gene flow"], a: 0 },
            { q: "Natural selection acts on:", o: ["Phenotypes", "Genotypes", "DNA only", "Proteins only"], a: 0 },
            { q: "Hardy-Weinberg equilibrium requires:", o: ["No mutation, no selection, large population, random mating", "Mutation only", "Selection only", "Small population"], a: 0 },
            { q: "Genetic drift is stronger in:", o: ["Small populations", "Large populations", "Medium populations", "Infinite populations"], a: 0 },
            { q: "Speciation can occur due to:", o: ["Geographic isolation", "Mutation", "Both", "None"], a: 2 },
            { q: "Polyploidy is common in:", o: ["Plants", "Animals", "Bacteria", "Viruses"], a: 0 },
            { q: "Allopatric speciation occurs due to:", o: ["Physical barrier", "Mutation", "Selection only", "Random drift"], a: 0 },
            { q: "Sympatric speciation occurs due to:", o: ["Reproductive isolation without barrier", "Physical barrier", "Mutation only", "Selection only"], a: 0 }
        ]
    }
};

// --- ANIMATION STYLES ---
const style = document.createElement('style');
style.innerHTML = `
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
@keyframes scaleIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
@keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }
@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
.anim-fade-up { animation: fadeInUp 0.5s ease-out forwards; }
.anim-scale-in { animation: scaleIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
.anim-shake { animation: shake 0.4s ease-in-out; }
.anim-pulse { animation: pulse 0.3s ease-out; }
`;
document.head.appendChild(style);

// --- APP STATE ---
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let userProfile = { name: '', elective: 'computer' };
let selectedDifficulty = 'easy';
let selectedSubjectMode = '';
let timerSettings = { mode: 'normal', duration: 0 }; // duration in seconds
let quizStartTime;
let quizTimerInterval;
let finalTimeStr = '00:00';

// --- DOM ELEMENTS ---
const introScreen = document.getElementById('intro-screen');
const regScreen = document.getElementById('reg-screen');
const difficultyScreen = document.getElementById('difficulty-screen');
const menuScreen = document.getElementById('menu-screen');
const timerScreen = document.getElementById('timer-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const proceedBtn = document.getElementById('proceed-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const questionCounter = document.getElementById('question-counter');
const subjectTag = document.getElementById('subject-tag');
const finalScore = document.getElementById('final-score');
const resultMessage = document.getElementById('result-message');
const reviewList = document.getElementById('review-list');
const totalQLabel = document.getElementById('total-q');
const resultUserName = document.getElementById('result-user-name');
const btnElective = document.getElementById('btn-elective');
const timerDisplay = document.getElementById('timer-display');
const resultTime = document.getElementById('result-time');
const startBattleBtn = document.getElementById('start-battle-btn');
const goalInputBox = document.getElementById('goal-input-box');
const goalMinutesInput = document.getElementById('goal-minutes');

// --- EVENT LISTENERS ---
startBtn.addEventListener('click', () => {
    switchScreen(introScreen, regScreen);
});

proceedBtn.addEventListener('click', () => {
    const nameInput = document.getElementById('reg-name');
    const electiveInput = document.querySelector('input[name="elective"]:checked');
    const errorMsg = document.getElementById('reg-error');

    if (!nameInput.value.trim()) {
        errorMsg.classList.add('visible');
        return;
    }

    userProfile.name = nameInput.value.trim();
    userProfile.elective = electiveInput.value;

    // Update Menu UI based on elective
    if (userProfile.elective === 'biology') {
        btnElective.className = 'menu-card biology';
        btnElective.innerHTML = `<div class="icon-box">🧬</div><div class="card-text"><h3>Biology</h3><p>Life & Nature</p></div>`;
        btnElective.onclick = () => startQuiz('biology');
    } else {
        btnElective.className = 'menu-card computer';
        btnElective.innerHTML = `<div class="icon-box">💻</div><div class="card-text"><h3>Computer</h3><p>Tech & Code</p></div>`;
        btnElective.onclick = () => startQuiz('computer');
    }

    switchScreen(regScreen, difficultyScreen);
});

startBattleBtn.addEventListener('click', () => {
    const timerType = document.querySelector('input[name="timerType"]:checked').value;
    
    if (timerType === 'goal') {
        const mins = parseInt(goalMinutesInput.value);
        if (isNaN(mins) || mins <= 0 || mins > 100) {
            goalMinutesInput.style.borderColor = 'var(--danger)';
            return;
        }
        timerSettings.mode = 'goal';
        timerSettings.duration = mins * 60;
    } else {
        timerSettings.mode = 'normal';
        timerSettings.duration = 0;
    }
    
    initQuiz();
});

goalMinutesInput.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    if (val > 100) {
        e.target.style.borderColor = 'var(--danger)';
        startBattleBtn.disabled = true;
    } else {
        e.target.style.borderColor = 'var(--glass-border)';
        startBattleBtn.disabled = false;
    }
});

nextBtn.addEventListener('click', nextQuestion);

// --- FUNCTIONS ---
function switchScreen(from, to) {
    from.classList.add('hidden');
    from.classList.remove('active');
    setTimeout(() => {
        to.classList.remove('hidden');
        to.classList.add('active');
        to.classList.remove('anim-fade-up');
        void to.offsetWidth; // trigger reflow
        to.classList.add('anim-fade-up');
    }, 300);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

// shuffle options and return new options + new answer index
function shuffleOptionsForQuestion(question) {
    const opts = question.o.map((text, i) => ({ text, origIndex: i }));
    const shuffled = shuffleArray(opts);
    const newAnswerIndex = shuffled.findIndex(item => item.origIndex === question.a);
    return {
        o: shuffled.map(s => s.text),
        a: newAnswerIndex
    };
}

function updateTimer() {
    const now = Date.now();
    
    if (timerSettings.mode === 'normal') {
        const elapsed = Math.floor((now - quizStartTime) / 1000);
        const m = Math.floor(elapsed / 60).toString().padStart(2, '0');
        const s = (elapsed % 60).toString().padStart(2, '0');
        finalTimeStr = `${m}:${s}`;
    } else {
        // Goal mode: Countdown
        const elapsed = Math.floor((now - quizStartTime) / 1000);
        let remaining = timerSettings.duration - elapsed;
        
        if (remaining <= 0) {
            remaining = 0;
            finalTimeStr = "00:00";
            if (timerDisplay) timerDisplay.textContent = finalTimeStr;
            clearInterval(quizTimerInterval);
            showResult(true); // true indicates time up
            return;
        }
        
        const m = Math.floor(remaining / 60).toString().padStart(2, '0');
        const s = (remaining % 60).toString().padStart(2, '0');
        finalTimeStr = `${m}:${s}`;
    }
    
    if (timerDisplay) timerDisplay.textContent = finalTimeStr;
}

function selectDifficulty(diff) {
    selectedDifficulty = diff;
    switchScreen(difficultyScreen, menuScreen);
}

function startQuiz(mode) {
    selectedSubjectMode = mode;
    switchScreen(menuScreen, timerScreen);
}

function initQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    currentQuestions = [];

    // Helper to deduplicate questions based on text
    const getUniqueQuestions = (questions) => {
        const seen = new Set();
        return questions.filter(q => {
            if (seen.has(q.q)) return false;
            seen.add(q.q);
            return true;
        });
    };

    const difficulty = selectedDifficulty;
    if (selectedSubjectMode === 'mixed') {
        // pick 25 from each subject (or available count if <25)
        const subjects = ['math', 'physics', 'chemistry', userProfile.elective];
        let pool = [];
        subjects.forEach(sub => {
            const rawList = (db[sub] && db[sub][difficulty]) ? db[sub][difficulty] : [];
            const uniqueList = getUniqueQuestions(rawList);
            const take = Math.min(25, uniqueList.length); // safe guard
            const picked = shuffleArray(deepCopy(uniqueList)).slice(0, take);
            pool = pool.concat(picked);
        });
        // shuffle final pool and ensure random order
        pool = shuffleArray(pool);
        // convert each question to include shuffled options (so options random)
        currentQuestions = pool.map(q => {
            const copy = deepCopy(q);
            const shuffled = shuffleOptionsForQuestion(copy);
            return {
                q: copy.q,
                o: shuffled.o,
                a: shuffled.a
            };
        });
        subjectTag.textContent = "Mixed Battle";
    } else {
        const rawList = (db[selectedSubjectMode] && db[selectedSubjectMode][difficulty]) ? db[selectedSubjectMode][difficulty] : [];
        const uniqueList = getUniqueQuestions(rawList);
        // keep previous behavior: pick up to 50 (you can change this)
        const take = Math.min(50, uniqueList.length);
        const picked = shuffleArray(deepCopy(uniqueList)).slice(0, take);
        currentQuestions = picked.map(q => {
            const copy = deepCopy(q);
            const shuffled = shuffleOptionsForQuestion(copy);
            return {
                q: copy.q,
                o: shuffled.o,
                a: shuffled.a
            };
        });
        subjectTag.textContent = selectedSubjectMode.charAt(0).toUpperCase() + selectedSubjectMode.slice(1);
    }

    // update total label in result screen
    totalQLabel.textContent = `/ ${currentQuestions.length}`;

    switchScreen(timerScreen, quizScreen);
    
    // Start Timer
    quizStartTime = Date.now();
    clearInterval(quizTimerInterval);
    quizTimerInterval = setInterval(updateTimer, 1000);
    updateTimer();

    renderQuestion();
}

function renderQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    if (!q) return;
    
    questionText.textContent = q.q;
    questionText.classList.remove('anim-fade-up');
    void questionText.offsetWidth;
    questionText.classList.add('anim-fade-up');
    questionCounter.textContent = `${currentQuestionIndex + 1} / ${currentQuestions.length}`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`;
    
    optionsContainer.innerHTML = '';
    nextBtn.disabled = true;

    // create option buttons (options already shuffled in currentQuestions)
    q.o.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.classList.add('anim-scale-in');
        btn.style.animationDelay = `${index * 0.1}s`;
        btn.style.opacity = '0';
        btn.setAttribute('aria-label', `Option ${String.fromCharCode(65 + index)}: ${opt}`);
        btn.innerHTML = `${String.fromCharCode(65 + index)}) &nbsp; ${opt}`;
        btn.onclick = () => selectOption(index, btn, q.a, q);
        optionsContainer.appendChild(btn);
    });

    // focus first option for keyboard accessibility
    const first = optionsContainer.querySelector('.option-btn');
    if (first) first.focus();
}

function selectOption(selectedIndex, btnElement, correctIndex, questionObj) {
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(b => {
        b.disabled = true;
        b.classList.add('disabled');
        b.style.opacity = '1';
    });

    const isCorrect = selectedIndex === correctIndex;

    btnElement.classList.add('selected');

    if (isCorrect) {
        btnElement.classList.add('correct');
        btnElement.classList.add('anim-pulse');
        score++;
    } else {
        btnElement.classList.add('wrong');
        btnElement.classList.add('anim-shake');
        // mark correct button
        const correctBtn = buttons[correctIndex];
        if (correctBtn) {
            correctBtn.classList.add('correct');
            correctBtn.classList.add('anim-pulse');
        }
    }

    // store answers (strip leading "A) " using regex)
    const getText = (btn) => btn.textContent.replace(/^[A-Z]\)\s*/, '').trim();

    userAnswers.push({
        q: questionObj.q,
        selected: getText(btnElement),
        correct: getText(optionsContainer.querySelectorAll('.option-btn')[correctIndex]),
        isCorrect: isCorrect
    });

    nextBtn.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        renderQuestion();
    } else {
        showResult();
    }
}

function showResult(isTimeUp = false) {
    clearInterval(quizTimerInterval);
    switchScreen(quizScreen, resultScreen);

    resultUserName.textContent = `Cadet: ${userProfile.name}`;
    const timeLabel = timerSettings.mode === 'goal' ? 'Time Left' : 'Time Taken';
    if (resultTime) resultTime.textContent = `${timeLabel}: ${finalTimeStr}`;
    finalScore.textContent = 0;
    setTimeout(() => {
        let startScore = 0;
        const duration = 1000;
        const startTime = performance.now();
        function animateScore(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            finalScore.textContent = Math.floor(ease * score);
            if (progress < 1) requestAnimationFrame(animateScore);
            else finalScore.textContent = score;
        }
        requestAnimationFrame(animateScore);
    }, 300);
    
    const percentage = (score / currentQuestions.length) * 100;
    if (isTimeUp) resultMessage.textContent = "Time's Up! ⏰";
    else if (percentage >= 90) resultMessage.textContent = "Legendary! 🏆";
    else if (percentage >= 70) resultMessage.textContent = "Excellent Work! 🌟";
    else if (percentage >= 50) resultMessage.textContent = "Good Effort! 👍";
    else resultMessage.textContent = "Keep Practicing! 📚";

    // Update Circle visual stroke
    try {
        const circle = document.querySelector('.progress-ring__circle');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        const percent = Math.round((score / currentQuestions.length) * 100);
        const offset = circumference - (percent / 100) * circumference;
        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 80);
    } catch (e) {
        // ignore if svg not found
    }
    
    reviewList.innerHTML = '';
    userAnswers.forEach((ans, i) => {
        const div = document.createElement('div');
        div.classList.add('review-item', ans.isCorrect ? 'correct' : 'wrong');
        div.innerHTML = `
            <span class="review-q">Q${i+1}: ${ans.q}</span>
            <span class="review-ans">Your Answer: ${ans.selected} ${ans.isCorrect ? '✅' : '❌'}</span>
            ${!ans.isCorrect ? `<span class="review-ans" style="color:var(--accent)">Correct Answer: ${ans.correct}</span>` : ''}
        `;
        reviewList.appendChild(div);
    });
}

function downloadPDF() {
    // Ensure jsPDF is available
    if (!window.jspdf) {
        alert("PDF generator not loaded yet.");
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Font setup
    doc.setFont("helvetica");

    // Title
    doc.setFontSize(20);
    doc.setTextColor(10, 25, 47);
    doc.text("Kips Battle of the Brain - Result", 105, 20, null, null, "center");

    // Metadata
    doc.setFontSize(12);
    doc.setTextColor(50, 50, 50);
    doc.text(`Subject: ${subjectTag.textContent}`, 20, 35);
    doc.text(`Name: ${userProfile.name}`, 20, 42);
    const timeLabel = timerSettings.mode === 'goal' ? 'Time Left' : 'Time Taken';
    doc.text(`${timeLabel}: ${finalTimeStr}`, 150, 42);
    doc.text(`Score: ${score} / ${currentQuestions.length}`, 20, 49);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 150, 35);

    doc.setLineWidth(0.5);
    doc.line(20, 55, 190, 55);

    let y = 65;

    userAnswers.forEach((ans, index) => {
        if (y > 270) {
            doc.addPage();
            y = 20;
        }

        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        
        const splitTitle = doc.splitTextToSize(`Q${index + 1}: ${ans.q}`, 170);
        doc.text(splitTitle, 20, y);
        y += (splitTitle.length * 6);

        doc.setFontSize(10);
        if (ans.isCorrect) {
            doc.setTextColor(0, 100, 0);
            doc.text(`Your Answer: ${ans.selected} (Correct)`, 20, y);
        } else {
            doc.setTextColor(200, 0, 0);
            doc.text(`Your Answer: ${ans.selected} (Wrong)`, 20, y);
            y += 5;
            doc.setTextColor(0, 100, 0);
            doc.text(`Correct Answer: ${ans.correct}`, 20, y);
        }

        y += 12;
    });

    doc.save("Kips_Result.pdf");
}

function toggleTimerInput() {
    const type = document.querySelector('input[name="timerType"]:checked').value;
    if (type === 'goal') {
        goalInputBox.classList.add('active');
    } else {
        goalInputBox.classList.remove('active');
    }
}

// --- Keyboard Support ---
document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    if (!quizScreen.classList.contains('hidden')) {
        const buttons = [...optionsContainer.querySelectorAll('.option-btn')];
        const enabledButtons = buttons.filter(b => !b.disabled);
        if (enabledButtons.length) {
            if (key === 'a' && buttons[0]) buttons[0].click();
            if (key === 'b' && buttons[1]) buttons[1].click();
            if (key === 'c' && buttons[2]) buttons[2].click();
            if (key === 'd' && buttons[3]) buttons[3].click();
        } else {
            if (key === 'enter' && !nextBtn.disabled) nextBtn.click();
        }
    }
});
