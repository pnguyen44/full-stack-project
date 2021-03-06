# The Decision Maker

The Decision-maker is a full stack app that allows users to create lists with the option to have the app automate the selection process. This app helps users make decisions quickly and easily. The app will select from the remaining items on the list that has not been checked off as completed by the user. It was created using Ruby on Rails, Javascript, AJAX, jQuery, Bootstrap, Handlebars, HTML, and CSS/SASS.  I ensured that my app was mobile-friendly to serve users on a variety of devices.

# User Stories

- When users click on "Account" button, user can sign up and sign in or change password and sign out.
- When user sign in, users can create a new list.
- After users create a list, users can create items by tying in the input box and clicking on the “Add” button.
- When users click on the add button, the items will populate on the list.
- Users can delete a list and an item.
- Users can edit a list’s name and an item’s name.
- When users check on the item’s checkbox, it will cross out the item.
- When users click on the “Decide” button, the input box will display one of the items that was not checked off on the list

# Wireframe

https://i.imgur.com/HODHxDB.jpg

# Back-end Repo

https://github.com/pnguyen44/decision-maker-back-end

# Creation Process

 The first thing I did was create a user story and wireframe to map out my decision-maker app. Afterward I created the model for the List and Item and added their relationship association with each other, as well the User model. In addition, I updated the controller and serializers and wrote curl scripts. When I finished developing the back-end code, I wrote the html and css for the the front-end. I used JQuery and Javascript to create functions in the front end.

# Unsolved Problems and Future Plans

I would like to have been able to do an automatic sign in after a successful sign up.
It would be great to allow users to move the list around and rearrange the order of the list.
