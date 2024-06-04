# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


---

# Weather Dashboard Application

### Introduction

I have created a simple and informative weather dashboard application. The app includes a search input for locating specific places, and it provides engaging options for different user types: travelers, farmers, and event planners, displaying relevant weather data for each.

### Personal Experience Integration

In this weather app, users can enter a location to view the corresponding temperature and weather conditions. The app features user-friendly radio buttons for selecting different user types. I used two free APIs to display weather data: 
- 'open-meteo' to find weather using longitude and latitude.
- 'openweathermap.org' to get longitude and latitude based on location input.

### Creative Feature Development

I developed a feature that changes the background image according to the weather conditions, such as clear, cloudy, rain, and snow. The background images change based on the weather codes provided by the API. However, sometimes the API does not provide perfect images that match the temperature.

### User-Centric Design

The app includes a user-centric design with radio buttons for different user types: traveler, farmer, and event planner. Initially, the same data is shown for all types, but with custom APIs, we can improve and provide more specific data for each user type.

### Problem-Solving and Adaptation

Designing a simple yet responsive dashboard was crucial. The most challenging part was choosing the perfect API, as many have limited calls and provide inconsistent data. I used mock data with a JSON server during development, which worked well but had limited locations. Eventually, I found the open-meteo API to be the most reliable and integrated it.

### Deployment

To deploy the app:
1. Create a build file in React by typing `npm run build`.
2. Open [Netlify](https://www.netlify.com) and navigate to the "Sites" section.
3. Drag and drop the build file to start the deployment process.
4. Click the "Open Production Deploy" button to view the live site.

### Live Site

You can view the live site at [this link](https://665ef3efdc7eba08168bca54--guileless-donut-0a8162.netlify.app/).

---

Feel free to let me know if there are any other specific adjustments you'd like to make!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
