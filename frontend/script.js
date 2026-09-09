/* =========================================
   NexaFlow - Main JavaScript
   Homepage + Login + Sign Up + Dashboard
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       LANGUAGE SELECTOR
    ========================================= */

    const languageSelect = document.getElementById("languageSelect");

    if (languageSelect) {
        languageSelect.addEventListener("change", function () {
            const language = this.value;

            if (language === "bn") {
                alert("বাংলা ভাষা শীঘ্রই আসছে।");
            } else if (language === "en") {
                alert("English is selected.");
            } else {
                alert("Language selected: " + language);
            }
        });
    }


    /* =========================================
       MOBILE MENU
    ========================================= */

    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const navMenu = document.getElementById("navMenu");

    if (mobileMenuBtn && navMenu) {

        mobileMenuBtn.addEventListener("click", function () {
            navMenu.classList.toggle("active");

            const isOpen = navMenu.classList.contains("active");

            mobileMenuBtn.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );
        });


        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
                mobileMenuBtn.setAttribute("aria-expanded", "false");
            });
        });
    }


    /* =========================================
       SMOOTH SCROLL
    ========================================= */

    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault();

                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });

    });


    /* =========================================
       GET STARTED BUTTON
    ========================================= */

    const getStartedButtons = document.querySelectorAll(".get-started");

    getStartedButtons.forEach(function (button) {

        button.addEventListener("click", function () {
            window.location.href = "signup.html";
        });

    });


    /* =========================================
       LOGIN BUTTON
    ========================================= */

    const loginButtons = document.querySelectorAll(".login-btn");

    loginButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const href = button.getAttribute("href");

            if (!href || href === "#") {
                event.preventDefault();
                window.location.href = "login.html";
            }

        });

    });


    /* =========================================
       SIGNUP BUTTON
    ========================================= */

    const signupButtons = document.querySelectorAll(".signup-btn");

    signupButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const href = button.getAttribute("href");

            if (!href || href === "#") {
                event.preventDefault();
                window.location.href = "signup.html";
            }

        });

    });


    /* =========================================
       WATCH DEMO
    ========================================= */

    const watchDemoButtons = document.querySelectorAll(".watch-demo");

    watchDemoButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            alert(
                "NexaFlow demo will be available soon."
            );

        });

    });


    /* =========================================
       HOMEPAGE NEW TASK BUTTON
    ========================================= */

    const newTaskButtons = document.querySelectorAll(".new-task");

    newTaskButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            alert(
                "Please login to create a new task."
            );

        });

    });


    /* =========================================
       DASHBOARD NEW TASK
    ========================================= */

    const newTaskButton = document.getElementById("newTaskButton");

    if (newTaskButton) {

        newTaskButton.addEventListener("click", function () {

            alert(
                "New Task feature is coming soon."
            );

        });

    }


    /* =========================================
       FEATURE EXPLORE BUTTONS
    ========================================= */

    const exploreButtons = document.querySelectorAll(".explore-button");

    exploreButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            alert(
                "This NexaFlow feature is coming soon."
            );

        });

    });


    /* =========================================
       SIGN UP
    ========================================= */

    const signupForm = document.getElementById("signupForm");

    if (signupForm) {

        signupForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const nameInput = document.getElementById("signupName");
            const emailInput = document.getElementById("signupEmail");
            const passwordInput = document.getElementById("signupPassword");
            const confirmPasswordInput = document.getElementById("confirmPassword");
            const termsInput = document.getElementById("terms");


            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;


            /* Name validation */

            if (name.length < 2) {

                alert("Please enter your full name.");

                nameInput.focus();

                return;
            }


            /* Email validation */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                alert("Please enter a valid email address.");

                emailInput.focus();

                return;
            }


            /* Password validation */

            if (password.length < 6) {

                alert(
                    "Password must be at least 6 characters long."
                );

                passwordInput.focus();

                return;
            }


            /* Confirm password */

            if (password !== confirmPassword) {

                alert(
                    "Passwords do not match."
                );

                confirmPasswordInput.focus();

                return;
            }


            /* Terms */

            if (termsInput && !termsInput.checked) {

                alert(
                    "Please agree to the Terms & Privacy Policy."
                );

                termsInput.focus();

                return;
            }


            /*
                Prototype account storage.

                IMPORTANT:
                This is only for frontend testing.
                Real production authentication should
                use a secure backend/database.
            */

            const account = {
                name: name,
                email: email,
                password: password
            };


            localStorage.setItem(
                "nexaFlowAccount",
                JSON.stringify(account)
            );


            alert(
                "Account created successfully! Please login."
            );


            window.location.href = "login.html";

        });

    }


    /* =========================================
       LOGIN
    ========================================= */

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const emailInput =
                document.getElementById("loginEmail");

            const passwordInput =
                document.getElementById("loginPassword");

            const rememberMe =
                document.getElementById("rememberMe");


            const email =
                emailInput.value.trim();

            const password =
                passwordInput.value;


            /* Check account */

            const savedAccount =
                localStorage.getItem("nexaFlowAccount");


            if (!savedAccount) {

                alert(
                    "No account found. Please create an account first."
                );

                window.location.href = "signup.html";

                return;
            }


            let account;


            try {

                account = JSON.parse(savedAccount);

            } catch (error) {

                alert(
                    "Account data is corrupted. Please sign up again."
                );

                localStorage.removeItem("nexaFlowAccount");

                window.location.href = "signup.html";

                return;
            }


            /* Check email */

            if (email !== account.email) {

                alert(
                    "Email address is incorrect."
                );

                emailInput.focus();

                return;
            }


            /* Check password */

            if (password !== account.password) {

                alert(
                    "Password is incorrect."
                );

                passwordInput.focus();

                return;
            }


            /* Login success */

            localStorage.setItem(
                "nexaFlowLoggedIn",
                "true"
            );


            localStorage.setItem(
                "nexaFlowUserName",
                account.name
            );


            if (rememberMe && rememberMe.checked) {

                localStorage.setItem(
                    "nexaFlowRememberMe",
                    "true"
                );

            } else {

                localStorage.removeItem(
                    "nexaFlowRememberMe"
                );

            }


            alert(
                "Login successful!"
            );


            window.location.href =
                "dashboard.html";

        });

    }


    /* =========================================
       FORGOT PASSWORD
    ========================================= */

    const forgotPassword =
        document.getElementById("forgotPassword");


    if (forgotPassword) {

        forgotPassword.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                alert(
                    "Password recovery will be available soon."
                );

            }
        );

    }


    /* =========================================
       DASHBOARD PROTECTION
    ========================================= */

    const isDashboardPage =
        document.body.classList.contains("dashboard-page");


    if (isDashboardPage) {

        const loggedIn =
            localStorage.getItem("nexaFlowLoggedIn");


        /* Not logged in */

        if (loggedIn !== "true") {

            window.location.href =
                "login.html";

            return;
        }


        /* =====================================
           USER NAME
        ===================================== */

        const savedName =
            localStorage.getItem("nexaFlowUserName");


        const displayName =
            savedName || "User";


        const dashboardUserName =
            document.getElementById(
                "dashboardUserName"
            );


        const welcomeUserName =
            document.getElementById(
                "welcomeUserName"
            );


        if (dashboardUserName) {

            dashboardUserName.textContent =
                displayName;

        }


        if (welcomeUserName) {

            welcomeUserName.textContent =
                displayName;

        }

    }


    /* =========================================
       LOGOUT
    ========================================= */

    const logoutButton =
        document.getElementById("logoutButton");


    if (logoutButton) {

        logoutButton.addEventListener(
            "click",
            function () {

                localStorage.removeItem(
                    "nexaFlowLoggedIn"
                );


                localStorage.removeItem(
                    "nexaFlowUserName"
                );


                localStorage.removeItem(
                    "nexaFlowRememberMe"
                );


                window.location.href =
                    "login.html";

            }
        );

    }


    /* =========================================
       DASHBOARD QUICK ACTIONS
    ========================================= */

    const actionCards =
        document.querySelectorAll(".action-card");


    actionCards.forEach(function (card) {

        card.addEventListener(
            "click",
            function () {

                const titleElement =
                    card.querySelector("h3");


                const title =
                    titleElement
                        ? titleElement.textContent.trim()
                        : "This feature";


                alert(
                    title + " is coming soon."
                );

            }
        );

    });


    /* =========================================
       AUTO CLOSE MOBILE MENU
    ========================================= */

    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth > 768 &&
                navMenu &&
                mobileMenuBtn
            ) {

                navMenu.classList.remove("active");

                mobileMenuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );


    /* =========================================
       CONSOLE MESSAGE
    ========================================= */

    console.log(
        "NexaFlow JavaScript loaded successfully."
    );

});