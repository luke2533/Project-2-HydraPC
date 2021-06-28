1.0 Nav-bar universal

Elements tested for  :

2.0 Footer universal

Elements tested for  :

3.0 Home page

Elements tested for  :

4.0 Build PC

Elements tested for  :

5.0 Find your PC

Elements tested for Find your PC :

- 5.1 Collapse button
- 5.2 Pre built PC objects

5.1 The collapse button for the FPC questionnaire should toggle showing and hiding the questions after being clicked, Issues found:
- When button is clicked the html shows that the function is active but the text remains hidden.

COME BACK TO THIS (The issues was that the div was in <p> element so this.nextElementSibling didnt work)

5.2 The purpose is to store the pre built PC's hardware into a manageable single location where I can call upon individual parts which will be useful when compiling the custom PC options for users, as well as the filtering system for the "find your pc" section. Issues found:

- 5.2.1 (Issue) Made a for loop that can output one of the objects correctly but not able to add other objects, unless I copy and paste the same for loop 18 times which isn't efficient.

- 5.2.2 (Issue) I have resolved the previous issue by adding all of the objects to a parent object then calling the child object and linking it to an ID on the page. By using .innerHTML I can display the object, the issue being that the commas that separate each key appear on the page.

6.0 Contact Us

Elements tested for  :

7.0 Checkout

Elements tested for  :

8.0 Create account???

Elements tested for  :
