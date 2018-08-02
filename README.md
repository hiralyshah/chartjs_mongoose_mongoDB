# Project Title

In this project one can display different charts using dynamic data from mongodb as well mongoose in nodejs
![image](https://user-images.githubusercontent.com/9768977/43562729-4935f748-9616-11e8-8e16-586947f0af5a.png)
![image](https://user-images.githubusercontent.com/9768977/43562737-52b715c2-9616-11e8-983a-c83a1637405d.png)
![image](https://user-images.githubusercontent.com/9768977/43562745-59bead30-9616-11e8-9fd0-b98022798c32.png)
![image](https://user-images.githubusercontent.com/9768977/43562750-5d71ce44-9616-11e8-9268-9a9ca1e15e25.png)
![image](https://user-images.githubusercontent.com/9768977/43562752-6103c4d6-9616-11e8-9a82-5c6b9b599bfb.png)
## Getting Started
```
# The easiest way to get started is to clone the repository:
git clone https://github.com/hiralyshah/chartjs_mongoose_mongoDB.git myChart

# Change directory
cd myChart

# Install NPM dependencies
npm install

# insert data using mongodb query
node test/insertdata_mongoDB_test.js  

# insert data using mongoose query
node test/insertdata_mongoose_test.js

# Then simply start your app
npm start

you can check website will be up and running on localhost at 3000 port.
http://localhost:3000
```

### Prerequisites

you need to install following software 
1)	Nodejs https://nodejs.org/en/download/
2)	Express setup in nodejs application using pug template
3)	Mongodb
4)	Mongoose
5)	robomongo https://robomongo.org/download

### Project Structure

Name | Description
-- | --
bin/ | create server and normalize port
models/ | Mongoose schema
models/blog.js | Mongoose schema and model for blog data
public/ | Static assets (css, img etc)
public/styleshees/style.css | Main stylesheet for your app
routes/ | controller for different routes
routes/chart.js | controller for display different charts
routes/index.js | controller for navigation bar
routes/user.js | controller for user account management
test/ | test folder for inserting test data in database
test/insertdata_mongoDB_test.js | insert mongodb data
test/insertdata_mongoose_test.js | insert mongoose data
views/ | Templates
views/dashboard | Dashboard related templates
views/dashboard/barchart.pug | Display bar chart
views/dashbaord/linechart.pug | Display line chart
views/dashboard/piechart.pug | Display piechart
views/dashboard/doughnut.pug | Display doughnut chart
views/partials/about.pug | About page(rendering test)
views/partials/error.pug |  Template for error messages
views/partials/index.pug | Navbar partial template.
views/partials/layout.pug | Base template.
app.js | The main application file.
package.json | NPM   dependencies.
package-lock.json | Contains exact versions of NPM dependencies in package.json.

## Authors

* [hiral shah](https://github.com/hiralyshah)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* https://www.chartjs.org/


 
 
 
 
 
