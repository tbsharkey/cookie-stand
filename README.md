# LAB - 06

## Salmon Cookies

Problem Domain
Your friend Pat has come up with a business idea by combining his love for sweets and his passion for healthy ecosystems. Pat has developed a recipe for a coffee-time confection called Salmon Cookies. These cookies made into the shape of a salmon and are suitable for both humans and salmon to enjoy.

Pat needs some help with the branding of the business, as well as some help with internal data management for the company, and has enlisted your assistance because of your extensive and proven work in developing web applications.

Pat’s Salmon Cookies, soon with franchises internationally, needs a proof of concept application to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule. The number of cookies to make depends on the hours of operation (6:00 AM to 8:00 PM for all locations) and a few factors unique to each location:

The minimum number of customers per hour.
The maximum number of customers per hour.
The average number of cookies purchased per customer.
Because we are early in the life of this business, we will need to build an application that is adaptable. Pat will need to be able to add and remove locations from the daily projections report, and Pat will also need to be able to easily modify the input numbers for each location based on day of the week, special events, and other factors. Pat would like to see these numbers with nice formatting in a web application.

Pat needs you to take a leading role in doing the design work and construction of a public-facing page, too. They already have a logo image picked out (below), but Pat is requesting your assistance in the design of the documents, color scheme, fonts, and any additional images for the public facing site.

Within your javascript file, create separate JS object literals for each shop location. Each location will be responsible for generating sales data and providing output on an html document. You should be able to perform the following tasks in your javascript file:

Store the min/max hourly customers, and the average cookies per customer, in object properties.
Use a method of that object to generate a random number of customers per hour. Objects/Math/random
Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated.
Store the results for each location in a separate array… perhaps as a property of the object representing that location.
Display the values of each array as unordered lists in the browser.
Calculating the sum of these hourly totals; your output for each location should look like this:

Seattle

6am: 16 cookies
7am: 20 cookies
8am: 35 cookies
9am: 48 cookies
10am: 56 cookies
11am: 77 cookies
12pm: 93 cookies
1pm: 144 cookies
2pm: 119 cookies
3pm: 84 cookies
4pm: 61 cookies
5pm: 23 cookies
6pm: 42 cookies
7pm: 57 cookies
Total: 875 cookies
Display the lists on sales.html. We will be adding features to this application and working with its layout in the upcoming labs.

Here are the starting numbers that you’ll need to build these objects:

Location	Min / Cust	Max / Cust	Avg Cookie / Sale
Seattle	23	65	6.3
Tokyo	3	24	1.2
Dubai	11	38	3.7
Paris	20	38	2.3
Lima	2	16	4.6
These numbers are simply Pat’s estimates for now, but eventually, once there has been some history collected that provides more accurate numbers, we’ll want the ability to update these numbers for each location, and to add/remove locations. But we’ll not build all of that today. Make sure to make each location is its own JavaScript object.

### Author: Tom Sharkey

### Links and Resources

* [submission PR](https://github.com/tbsharkey/cookie-stand)
* [Github Page](https://tbsharkey.github.io/cookie-stand/)

### Lighthouse Accessibility Report Score

* Provide a screenshot of your score after running a Lighthouse Accessibility report.

### Reflections and Comments

This is my first foray into implementing an object that appends html elements. 