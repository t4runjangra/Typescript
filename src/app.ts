let username = "Tarun";

username = "Rohit";

const age = 12

console.log(typeof age);

type Direction = "left" | "right";

type Status = "success" | "error";

type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

const a = "hello";

let b = "hello";

let DiceRoll: DiceRoll = 2
console.log(DiceRoll);


let var1:any =10 
var1 = 12 
var1.toUpperCase()
console.log(var1);

//"any exists as an escape hatch. It allows developers to work with code when the type isn't known yet, when migrating JavaScript projects, or when interacting with untyped libraries. It trades type safety for flexibility.




function login(
    email: string,
    password: string
): boolean {
    // Login logic
    return true;
}



type LoginCallback = (userId: string) => void;

function authenticate(callback: LoginCallback) {
    // User authenticated
    callback("abc123");
}


authenticate((id) => {
    console.log(id);
});

// Here, (userId: string) => void is a function type.


// Interface (API Request Body)

// Your register endpoint.

interface RegisterBody {
    username: string;
    email: string;
    password: string;
}

// Controller:

function register(body: RegisterBody) {
    console.log(body.username);
}

// Instead of

// function register(body: {
    // username: string;
    // email: string;
//     password: string;
// })

/*3. Interface (User Document)
interface User {
    id: string;
    username: string;
    email: string;
    avatar?: string;
}

Now

const user: User = {
    id: "123",
    username: "Tarun",
    email: "tarun@gmail.com"
};
4. Interface for JWT Payload

Instead of

const payload = {
    id: "123",
    email: "tarun@gmail.com"
};

Create

interface JwtPayload {
    id: string;
    email: string;
}

Then

function generateToken(payload: JwtPayload) {
    // ...
}
5. Interface for Notes
interface Note {
    _id: string;
    title: string;
    description: string;
    completed: boolean;
}

Now your React state becomes

const notes: Note[] = [];

instead of

const notes = [];
6. Function Returning an Interface
interface User {
    id: string;
    username: string;
    email: string;
}

function getCurrentUser(): User {
    return {
        id: "1",
        username: "Tarun",
        email: "tarun@gmail.com"
    };
}

The function promises:

"I will always return a User."

7. React Props
interface ButtonProps {
    text: string;
    onClick: () => void;
}
function Button(props: ButtonProps) {
    return <button>{props.text}</button>;
}
8. API Response

Instead of using any

interface ApiResponse {
    success: boolean;
    message: string;
    data: User;
}

Now

const response: ApiResponse = await axios.get(...);
9. Function Type for Middleware
type Next = () => void;

function authMiddleware(next: Next) {
    // Verify JWT
    next();
}
10. Interface Extension
interface User {
    id: string;
    username: string;
    email: string;
}

interface Admin extends User {
    permissions: string[];
} */