# Activity 3
# Tyler Friesen CST-391
# March 9rd 2025

# Part 1

---

<figure>
    <img src="./artistlist.png" alt="image1">
    <figcaption>The list of artists to choose from</figcaption>
</figure>

---

<figure>
    <img src="./createalbum.png" alt="image2">
    <figcaption>create an album page/form</figcaption>
</figure>

---

<figure>
    <img src="./homepage.png" alt="image3">
    <figcaption>The home page for the application</figcaption>
</figure>

---

<figure>
    <img src="./listalbums.png" alt="image3">
    <figcaption>The home page for the application</figcaption>
</figure>

---

<figure>
    <img src="./listtracks.png" alt="image3">
    <figcaption>The home page for the application</figcaption>
</figure>

---


## Research

1. In an Angular application, maintaining a logged-in state typically involves both client-side storage and communication with a backend server. When a user logs in, the application sends a request to the backend with the user's credentials (such as username and password). The backend then verifies the credentials and, if valid, generates a token (commonly a JSON Web Token or JWT), which it sends back to the client. The client stores this token in `localStorage` or `sessionStorage` to maintain the logged-in state across page refreshes or browser sessions. `localStorage` retains the token even after the browser is closed, while `sessionStorage` is cleared when the session ends.

To manage the logged-in state, Angular often employs route guards to protect routes that require authentication. These guards check if the user has a valid token before allowing access to the protected route, redirecting unauthorized users to the login page. Additionally, Angular uses HTTP interceptors to automatically include the JWT in the `Authorization` header for every outgoing API request. This ensures that the backend can authenticate the user with each request by validating the token, which contains the user’s identity and any relevant permissions.

The server checks the validity of the JWT and ensures it hasn’t expired or been tampered with. To handle token expiration, many applications use a refresh token system. While the access token (JWT) has a short lifespan, the refresh token is longer-lived and can be used to obtain a new access token when the old one expires. If the access token is expired, the application sends the refresh token to the server to obtain a new one, maintaining the user’s logged-in state without requiring them to log in again. 

Finally, when the user logs out, the application removes the token from `localStorage` or `sessionStorage`, effectively ending the session. Without the token, subsequent API requests will be unauthenticated, and the user will be treated as logged out. This combination of storing the token, using interceptors and route guards, validating tokens on the backend, and handling token refreshes ensures a smooth and secure user experience in Angular applications.
