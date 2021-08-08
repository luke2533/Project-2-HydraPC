# Hydra PC's - Project 2

Hydra PC’s is a computer hardware online store that sells both pre built PC’s and custom made gaming PC’s. The website's goals are to create a PC builder where users can pick and choose parts for their personal rig that displays the parts price and some basic information for the specs. The website will also feature pre-built PC’s for those who lack hardware knowledge, through a questionnaire that will help find what the user needs and find the computer best tailored to their wants and needs.

## 1.0 UX

### 1.1 User goals

#### 1.1.1 Target audience

Hydra’s target audience are the PC gaming market from inexperienced people in need of guidance of what hardware they need to fill their needs, to experienced PC enthusiasts who want a high quality custom built rig with customer support to help with any future issues.

### 1.2 User needs and goals

#### 1.2.1 User needs:

User needs:
1. Accessibility for users
2. Working contact/sign up page
3. Pre built PC finder (Questionnaire thing)
4. Custom PC part picker
5. Total price that adds up the selected parts
6. Images and links of the PC parts
7. Company contact info

#### 1.2.2 How the user needs are met

1. Alt tags for videos and images, text transcript, colour contrast, form labels, clear feedback for required forms fields * and device support.
2. Contact/sign up page that sends and automated email to say that they have completed their sign up or complaint.
3. A set of questions (form) that's goal is to find out the budget, wants and needs of the user to find them a pre-built computer.
4. Sections with lists of computer parts that the user can select to create a PC.
5. Each computer part has value (price) which is added together each time a part is selected.
6. Images and links to the hardware’s website will be provided.
7. Company contact information.

### 1.3 Developer and business goals

#### 1.3.1 Goals of the business

1. The website attracts both novice and adept users to PC hardware
2. The website can retain the same traffic through word of mouth
3. Sell Pre built computers
4. Sell tailed computers at a premium
5. To promote users to sign up

### 1.4 User stories

1.4.1 User is looking to custom build a PC
1.4.2 User wants a pre set built computer
1.4.3 User isn't sure what computer they need
1.4.4 User wants to save there custom PC specs
1.4.5 User wants to know the total price of their PC

1.4.1 The user wants to build a custom PC but doesn't want to buy each part from different sellers, the user can find the custom PC maker on any page through the footer and nav-bar. Where they can go through each part and select a part to make their PC that fits their requirements.

1.4.2 The user doesn’t know enough about computers to build their own through the custom PC builder, users can find the pre-built PC’s under find your PC link on nav-bar and footer. Users can select a pre-built PC where the specs and price will display information on it.  

1.4.3 For users who know nothing about computers and need assistance in picking a computer, the Find Your PC can be found on all pages on the nav-bar or footer. The page has a drop down menu where a number of questions are asked for the user to find out what their requirements and restrictions are, then present the computers that they can afford.

1.4.4 After building a custom PC on the build PC page the user may not have the money or wants to build multiple computers but doesn't want to lose the PC when they load the computer. To avoid this the user can save the specs list and it will be sent to their email address.

1.4.5 The user is creating a custom computer but needs to stick within a budget and needs a way to track the costs, on the build PC page at the left side of the page a sidebar follows the user on the page as they scroll up and down. This adds the parts the user has selected and totals the cost of the hardware underneath the part section.

## 2.0 Design choices

### 2.1 Fonts

### 2.2 Icons

### 2.3 Colours

### 2.4 Images and videos

### 2.5 Wireframes

## 3.0 Features

### 3.1 Existing features

### 3.2 Features left to implement

## 4.0 Technologies used

### 4.1 HTML5

### 4.2 CSS3

### 4.3 Bootstrap 4.5

### 4.4 JavaScript

### 4.5 jQuery

## 5.0 Testing

## 6.0 Development life cycle

### 6.1 Initial commit

Additions:

- File structure
- Responsive CSS
- Responsive JS
- README structure

### 6.2 Nav-bar, Footer skeleton, wireframes and Documentation

Additions:

- Basic nav-bar structuring for desktop
- Very basic footer structuring for Desktop
- Added documentation
- Updated wireframes

### 6.3 Home page basic outline

Additions:

- Added carousel (not functional)
- Added top PC section
- Added social media section

### 6.4 Responsive breakpoints on Nav-bar

Additions:

- Nav-bar desktop responsive breakpoints
- Nav-bar Tablet responsive breakpoints
- Nav-bar Mobile responsive breakpoints
- Nav-bar small mobile responsive breakpoints

### 6.5 Responsive breakpoints on footer

Additions:

- Footer desktop responsive breakpoints
- Footer Tablet responsive breakpoints
- Footer Mobile responsive breakpoints

### 6.6 Basic HTML for Pre built PC's, contact us and create account

Additions:

- Basic HTML for Pre-built PC's page
- Basic HTML for Contact us page
- Basic HTML for Create account page

### 6.7 Basic HTML for Custom PC and checkout

Additions:

- Basic HTML for Custom PC page
- Basic HTML for Checkout page

### 6.8 Wireframes, collapse.js, pc images and dictionaries for pre built pc's

Additions:

- Added images for pre built pc cards
- Added Wireframes
- collapse.js added but not yet functional
- pre-built-pc.js added dictionaries for all 18 pcs

### 6.9 FPC Collapse button works, test.md added, fixes to image sizing

Additions:

- FPC Collapsible button works
- Test.md file added
- Fix to image sizing on FPC cards

Issues - FPC images don't resize correctly on tablets or smaller devices

### 6.10 Responsive parent object and pre built PC card info displayed

Additions:

- Added parent object to pre built PC's
- The correct information for the PC's is displayed

Issues - The pre built PC cards have commas from the objects which need to be removed

### 6.11 Checkout links, wireframe additions, new logo, nav-bar, find PC progress

Additions:

- Links to checkout from pre built PC's
- Wireframe additions (Change in how saving custom PC will work)
- Changes to logo
- Changed color's nav-bar (subject to change)
- Find PC questionnaire responds in console

Issues - Trying to add values to pre-built computers that respond to the questionnaire

### 6.12 Removed sign up page from nav-bar, added sidebar and case parts

Additions:

- Removed the sign in pages from the nav-bar
- Added the sidebar for custom built PC
- Added the case parts to custom built page
- Added values to pre built PC's for questionnaire

Issues - Sidebar stuck behind the pc part's

### 6.13 Images and titles for PC parts added, sidebar issues resolved

Additions:

- Images and titles added for all PC part categories
- Fixed sidebar being stuck behind pc parts

Issue RESOLVED - Sidebar stuck behind the pc part's (6.12)

### 6.14 Basic sidebar CSS and JS, save prompt and home pre built PC's

Additions:

- Added 3 Pre built PC recommendations to home page
- Added basic CSS for price tracker box
- Added basic CSS and JS for spec tracker
- Added prompt for save JS (Not including emailJS yet)

### 6.15 Custom PC collapsible + radio buttons work, spec tracker displays cases

Additions:

- Collapsible sections for custom PC section
- Added radio buttons to each part (to select parts)
- When selecting a case it displays the correct value (only case)

### 6.16 Progress on price tracker, PC filter and part picker works

Additions:

- All parts appear on the custom PC side bar when selected
- All prices added to each part for custom PC's
- Progress made on price tracker (Doesn't work yet)  
- Progress on pre built PC filter

Issues - The price tracker can't target the correct data because of shared classes on each section and therefore the data cannot be converted into numbers as it cannot be targeted.

Issues - The pre built PC filter does respond but always filters the same things regardless of which one is selected and once selected unless the page is refreshed the page stays the same.

### 6.17 EmailJS added and functional, forms and replaced custom PC alert

Additions:

- Custom PC emailJS
- Checkout emailJS
- Functional checkout form
- Contact us emailJS
- Functional contact us form

Removed:

- Custom PC alert for customers when they want to save their custom PC and changed to a small form where they add their details

### 6.18 Changes to home page, progress on build PC, removed social media

Additions:

- customPc.js for price tracker and pc priceTracker
- Home page advertisement for build PC
- Solved PC card issue

Removed:

- Find PC from nav-bor
- Find PC from footer
- Removed social media section from home page

Issues - Slide show isn't working get error message saying .carousel isn't a function

Issues - Problem with the priceTracker identify the selected item

Issues RESOLVED - Trying to add values to pre-built computers that respond to the questionnaire (6.11)

Issue RESOLVED - Comma appearing in between each part (6.10)

### 6.19 Title/logo link to home, change nav-bar colors, updated README 6.18

Additions:

- Links to home page on title and logo on the nav-bar
- Updated the logo
- Change in colour scheme (Work in progress)
- Documentation updated 6.18 missing issue RESOLVED now corrected

## 7.0 Deployment

### 7.1 GitHub links

## 8.0 Credits

### 8.1 Media

### 8.2 Code

### 8.3 Content

## Disclaimer
