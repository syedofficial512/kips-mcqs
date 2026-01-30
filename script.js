/* script.js */

// --- DATA STORE ---
const db = {
    math: [
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
        { q: "If angles are equal and sides proportional, triangles are:", o: ["Congruent", "Similar", "Right-angled", "Scalene"], a: 1 }
    ],
    physics: [
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
        { q: "Weight depends on:", o: ["Mass only", "Volume only", "Gravity", "Density"], a: 2 }
    ],
    chemistry: [
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
        { q: "Chemical change produces:", o: ["No new substance", "New substance", "Temporary change", "Shape change"], a: 1 }
    ],
    computer: [
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
        { q: "Computer without software is:", o: ["Useful", "Fast", "Secure", "Useless"], a: 3 }
    ]
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

// --- DOM ELEMENTS ---
const introScreen = document.getElementById('intro-screen');
const menuScreen = document.getElementById('menu-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
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

// --- EVENT LISTENERS ---
startBtn.addEventListener('click', () => {
    switchScreen(introScreen, menuScreen);
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

function startQuiz(mode) {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    currentQuestions = [];

    if (mode === 'mixed') {
        // pick 25 from each subject (or available count if <25)
        const subjects = ['math', 'physics', 'chemistry', 'computer'];
        let pool = [];
        subjects.forEach(sub => {
            const available = db[sub] || [];
            const take = Math.min(25, available.length); // safe guard
            const picked = shuffleArray(deepCopy(available)).slice(0, take);
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
        const avail = db[mode] || [];
        // keep previous behavior: pick up to 50 (you can change this)
        const picked = shuffleArray(deepCopy(avail)).slice(0, 50);
        currentQuestions = picked.map(q => {
            const copy = deepCopy(q);
            const shuffled = shuffleOptionsForQuestion(copy);
            return {
                q: copy.q,
                o: shuffled.o,
                a: shuffled.a
            };
        });
        subjectTag.textContent = mode.charAt(0).toUpperCase() + mode.slice(1);
    }

    // update total label in result screen
    totalQLabel.textContent = `/ ${currentQuestions.length}`;

    switchScreen(menuScreen, quizScreen);
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

function showResult() {
    switchScreen(quizScreen, resultScreen);

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
    if (percentage >= 90) resultMessage.textContent = "Legendary! 🏆";
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
    doc.text(`Score: ${score} / ${currentQuestions.length}`, 20, 42);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 150, 35);

    doc.setLineWidth(0.5);
    doc.line(20, 48, 190, 48);

    let y = 60;

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
