# Web Development Project 4 - CatsDiscoverLove

Submitted by: Krishna Choudhary

This web app is an interactive discovery platform that fetches random cat images using an external API (TheCatAPI). Users can view one random cat at a time along with key attributes such as the cat’s origin, life span, and weight. They can click on these attributes to add them to a ban list, and any future images containing banned attributes are filtered out. The app also maintains a history of previously viewed cats so that users can see what they have already discovered. The project is built with React, using custom hooks for API calls and state management, and features a responsive three-column layout.

Time spent: 8 hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **Clicking a button creates a new API fetch request and displays at least three attributes from the returned JSON data**
- [X] **Only one item/API call is viewable at a time**
- [X] **API calls appear random to the user**
- [X] **At least one image is displayed per API call**
- [X] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - [X] To ensure an accurate grade, your recording **must** show that when clicked, an attribute in the ban list is immediately removed from the list of banned attributes
- [X] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**

The following **optional** features are implemented:

- [X] Multiple types of attributes can be added to the ban list
- [X] Users can see a stored history of their previously viewed items from their session

The following **additional** features are implemented:

- A responsive three-column layout using CSS Grid with sidebars for the seen list and ban list.
- The code is structured to easily support additional categories (e.g., dogs and universe) in future enhancements.

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='./project-3.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

## Notes

Describe any challenges encountered while building the app.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.