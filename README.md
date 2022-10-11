[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="./src/assets/icons/logo.svg" alt="Logo" width="200" height="200">
  </a>

  <h3 align="center">Movie app</h3>

  <p align="center">
    A awesome web application based on an existing API. 
    <br />
    <a href="https://juliavasiukevich.github.io/movie-app/">View Demo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

 It is a movie search application based on an existing API. 
 * You can log in, register and change password and your email.
 * Favorite movies are stored in localStorage.
 * Trends can be added if the user finds a new movie with a high rating. 
 * You can share a link to the movie in Telegram and read in detail about each film.

Use the `npm start` to get started.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This is a list of libraries of the main libraries that were used in the project:

- [![Typescript][typescriptlang.org]][typescript-url]
- [![React][react.js]][react-url]
- [![Axios][axios-http.com]][axios-url]
- [![Firebase][firebase.google.com]][firebase-url]
- [![Redux Toolkit][redux-toolkit.js.org]][redux-url]
- [![Redux Persist][github.com/rt2zz/redux-persist]][persist-url]
- [![React Hook Form][react-hook-form.com]][react-hook-form-url]
- [![React Router][reactrouter.com]][react-router-url]
- [![styled-components][styled-components]][styled-components-url]
- [![Framer Motion][framer.com]][framer-url]
- [![React Select][react-select.com]][react-select-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Use the `npm start` to get started.

### Prerequisites

Use the `npm i` to install all libraries.

<!-- USAGE EXAMPLES -->
## Usage

When you open the application, you will find yourself on homepage with various categories. Each category has a slider of 10 films. As you scroll the page, new categories will be added.

![image](http://g.recordit.co/dvPNFwqKOu.gif)

If you are not a registered user and go to the favorites or settings tab, you will be automatically redirected to the login tab.

![image](http://g.recordit.co/nx2P08WKoq.gif)

If you don't have an account yet, go to the tab - sign up. If you have forgotten your password, click forgot password.

![image](./image%20for%20READme1.png)

After registration or authorization, you can finally go to your favorite movies, if there is something there. While the user does not have favorite movies.

![image](./image%20for%20README2.png)

But there are always trends. Trends can be updated as you use the app. This is due to API limitations.

![image](./image%20for%20README3.png)

When you click on a movie, you will see a detailed description of the movie, recommendations based on the name of the movie, you can add it to your favorites or share the link in telegram.

![image](http://g.recordit.co/TweeFPbrBW.gif)

Now we have 1 movie in the favorites tab and an additional trend.

![image](./image%20for%20README4.png)

In the settings tab, you can change the email, password, and also change the dark or light theme that you like.

![image](http://g.recordit.co/qm13Ynqtkn.gif)

Search also works with dynamic pagination when the user is at the bottom of the page. When you go to the search tab, filters work that can be removed one at a time or all at the same time.

![image](http://g.recordit.co/4cUdD23XWw.gif)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

If you have a suggestion that would make this project better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Julia Vasiukevich - juliavasiukevich@gmail.com
<br />
[telegram](https://t.me/Julia_Vasiukevich)

Project Link: [https://github.com/JuliaVasiukevich/movie-app](https://github.com/JuliaVasiukevich/movie-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/juliavasiukevich/movie-app.svg?style=for-the-badge
[contributors-url]: https://github.com/juliavasiukevich/movie-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/juliavasiukevich/movie-app.svg?style=for-the-badge
[forks-url]: https://github.com/juliavasiukevich/movie-app/network/members
[stars-shield]: https://img.shields.io/github/stars/juliavasiukevich/movie-app.svg?style=for-the-badge
[stars-url]: https://github.com/juliavasiukevich/movie-app/stargazers
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[typescriptlang.org]: https://img.shields.io/badge/-Typescript-blue?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[axios-http.com]: https://img.shields.io/badge/-axios-671ddf?style=for-the-badge&logo=axios&logoColor=white
[axios-url]: https://axios-http.com/ru/docs/intro
[firebase.google.com]: https://img.shields.io/badge/-firebase-5f6368?style=for-the-badge&logo=firebase&logoColor=orange
[firebase-url]: https://firebase.google.com/docs/
[redux-toolkit.js.org]: https://img.shields.io/badge/-redux--toolkit-764abc?style=for-the-badge&logo=redux&logoColor=white
[redux-url]: https://redux-toolkit.js.org/
[react-hook-form.com]: https://img.shields.io/badge/-react--hook--form-1e2a4a?style=for-the-badge&logo=react-hook-form&logoColor=ec5990
[react-hook-form-url]: https://react-hook-form.com/
[github.com/rt2zz/redux-persist]: https://img.shields.io/badge/-redux--persist-persist?style=for-the-badge
[persist-url]: https://github.com/rt2zz/redux-persist#readme
[styled-components]: https://img.shields.io/badge/-styled--components-35495E?style=for-the-badge&logo=styled-components&logoColor=pink
[styled-components-url]: https://styled-components.com/
[framer.com]: https://img.shields.io/badge/-framer--motion-DD0031?style=for-the-badge&logo=framer&logoColor=black
[framer-url]: https://www.framer.com/
[react-select.com]: https://img.shields.io/badge/-react--select-FF3E00?style=for-the-badge
[react-select-url]: https://react-select.com/home
[reactrouter.com]: https://img.shields.io/badge/-react--router-563D7C?style=for-the-badge&logo=react-router&logoColor=white
[react-router-url]: https://reactrouter.com/