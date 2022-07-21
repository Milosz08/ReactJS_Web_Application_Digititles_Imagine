<h1 align="center">
  Digititles Imagine ReactJS Web Application
  <br>
  <img src="https://cdn.miloszgilga.pl/digititles-imagine-project-logo.png" width="170">
  <br>
</h1>
<p align="center" style="font-size: 1.2rem;">
The client layer of the application made for Digititles Imagine. The main part was made using the React library with TypeScript. The main library providing the animation is GSAP. State management is taken care of by the Redux system.
</p>

> See this website at [digititlesimagine.com.pl](https://digititlesimagine.com.pl/) <br>
> See Back-end for this website written in Spring Framework in my repo: [Spring_RestfullApi_Digititles_Imagine](https://github.com/Milosz08/Spring_RestfullApi_Digititles_Imagine)

<hr/>

## About the Project
The project is a client layer written mainly using the ReactJS library. The project also includes a simple CMS system communicating with the server layer via a REST interface (images below). To log in to the CMS, a login and password are required. There are also roles: moderator and administrator, where:
* moderator can view users' messages and submissions but cannot delete or manage projects
* administrator can delete users' messages and submissions and fully manage projects (modification, deletion, etc.).

## Animations and Client-Side-Rendering
The choice of client-side application rendering technology was dictated by the rather large number of animations required to be generated on the page. The GSAP library with a special wrapper for the ReactJS library proved to be a big help. It makes animations fast, responsive and quite simple to implement compared to manipulating DOM elements using pure JavaScript.

## CMS Panel

<img src="https://cdn.miloszgilga.pl/digititlesimagine-cms-panel/cms-panel-img1.png">
<img src="https://cdn.miloszgilga.pl/digititlesimagine-cms-panel/cms-panel-img2.png">
<img src="https://cdn.miloszgilga.pl/digititlesimagine-cms-panel/cms-panel-img3.png">
<img src="https://cdn.miloszgilga.pl/digititlesimagine-cms-panel/cms-panel-img4.png">
<img src="https://cdn.miloszgilga.pl/digititlesimagine-cms-panel/cms-panel-img5.png">

## Clone and Installation
If you want to clone and work with this repository, use the built-in interface in your IDE (for example WebStorm or Visual Studio Code) or use the clone project algorithm with git bash:<br>
1. Open Git Bash.
2. Change the current working directory to the location where you want the cloned directory.
3. Type `git clone` and then paste the URL you copied earlier.
  
```
$ git clone https://github.com/Milosz08/ReactJS_Web_Application_Digititles_Imagine
```

## License
This application is on MIT License.
