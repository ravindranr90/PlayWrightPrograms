class Page {  //parent class

    public loadUrl(): void {
        console.log(`Loading the base page`);        
    }
}

class LoginPage extends Page { //Child class takes precedence over the parent class
    public loadUrl(): void {
        console.log(`Loading the Login Page`);
    }
}
const login = new LoginPage();
login.loadUrl();


/* Notes :

🎯 Objective:
Help beginners understand:

What is method overriding (not overloading)

How inheritance works

Why the child class method takes precedence over the parent class method

🪜 Step-by-Step Teaching Plan
✅ 1. Start with the base class

class Page {
    public loadUrl(): void {
        console.log(`Loading the base page`);        
    }
}
🧑‍🏫 Explain:
"This is a parent class called Page, which has one method: loadUrl(). Whenever we call this method, it logs Loading the base page."

Live Demo:


const page = new Page();
page.loadUrl(); // Output: Loading the base page
✅ 2. Introduce the child class with same method

class LoginPage extends Page {
    public loadUrl(): void {
        console.log(`Loading the Login Page`);
    }
}
🧑‍🏫 Explain:
"Now we’re creating a child class LoginPage, which extends the Page class, meaning it inherits everything from the parent."

"But here, we are redefining the same method loadUrl(). This is called method overriding, not overloading."

✅ 3. Show that child method overrides the parent

const login = new LoginPage();
login.loadUrl(); // Output: Loading the Login Page

🧑‍🏫 Explain:
"Even though LoginPage is a child of Page, when we call loadUrl() on a LoginPage object, it runs the overridden method in the child."

"This is because the method in the child class takes precedence over the parent’s method."*/