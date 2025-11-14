# Tren Pedia

## See the App!
![Tren Pedia Logo](./assets/Logo.png)

## Description
Tren Pedia is a comprehensive fitness knowledge platform that allows users to explore and manage information about gym athletes and fitness brands. The application serves as a digital encyclopedia for fitness enthusiasts to discover athletes, learn about brands, and contribute to the fitness community.

## Client Repo here
https://github.com/MateoSancho/Project-2-main

## Server Repo here
https://github.com/MateoSancho/Data-for-Project-2/commits?author=MateoSancho

## Technologies, Libraries & APIs used
- **Frontend**: React, React Router DOM, Axios, CSS3
- **Development**: Vite, JavaScript (ES6+)
- **Styling**: Custom CSS with modern design patterns and AI help
- **State Management**: React Hooks (useState, useEffect)
- **HTTP Client**: Axios for API communication
- **Environment Variables**: Vite environment configuration

## Client Structure

### User Stories
- **404** - As a user I want to see a nice 404 page when I go to a page that doesn't exist so that I know it was my fault
- **Homepage** - As a user I want to be able to access the homepage so that I see what the app is about and navigate to different sections
- **Athletes List** - As a user I want to see all available athletes so that I can learn about different fitness influencers and bodybuilders
- **Athlete Details** - As a user I want to view detailed information about a specific athlete so that I can learn more about them
- **Add Athlete** - As a user I want to add new athletes to the database so that I can contribute to the community knowledge
- **Edit Athlete** - As a user I want to edit existing athlete information so that I can keep the data up to date
- **Delete Athlete** - As a user I want to remove athletes from the database so that I can maintain data quality
- **Brands List** - As a user I want to see all available fitness brands so that I can explore different supplement and apparel companies
- **Brand Details** - As a user I want to view detailed information about a specific brand so that I can learn more about their products
- **Add Brand** - As a user I want to add new brands to the database so that I can expand the brand directory
- **Edit Brand** - As a user I want to edit existing brand information so that I can ensure data accuracy
- **Delete Brand** - As a user I want to remove brands from the database so that I can manage the content
- **Search** - As a user I want to search for specific athletes or brands so that I can quickly find what I'm looking for
- **About Page** - As a user I want to learn about the project and developer so that I understand the purpose behind the application

### Client Routes

#### React Router Routes (React App)
| Path | Page | Components | Behavior |
|------|------|------------|----------|
| `/` | Home | Dashboard | Home page with navigation to main sections |
| `/athletes` | AthletesList | AthleteCard, Search | Shows all athletes with search functionality |
| `/athletes/:id` | AthleteAbout | ActionButtons, EditForm | Shows athlete details, allows edit/delete |
| `/athletes/add` | AddAthlete | AthleteForm | Form to add new athletes |
| `/brands` | BrandsList | BrandCard, Search | Shows all brands with search functionality |
| `/brands/:id` | BrandAbout | ActionButtons, EditForm | Shows brand details, allows edit/delete |
| `/brands/add` | AddBrand | BrandForm | Form to add new brands |
| `/about` | About | ProfileCard, ProjectInfo | About page with developer information |
| `*` | NotFound | ErrorCode, ActionButtons | 404 error page with gym-themed humor |

### Other Components
- **Navbar** - Navigation header with app logo and title
- **Footer** - Application footer with copyright information
- **AthleteCard** - Card component for displaying athlete previews
- **BrandCard** - Card component for displaying brand previews
- **Search** - Search input component for filtering content
- **ActionButtons** - Reusable edit/delete button components
- **ImagePreview** - Component for image preview in forms
- **FormGroups** - Reusable form input components
- **LoadingStates** - Loading indicators for better UX

## Collaborators
**Mateo** - Full Stack Developer & Gym Enthusiast

## Project
**Repository Link Client**:  https://github.com/MateoSancho/Project-2-main

**Repository Link Server**: https://github.com/MateoSancho/Data-for-Project-2/commits?author=MateoSancho

**Deploy Link**: trenpedia-7osgexzom-mateos-projects-e2ba422b.vercel.app

## Slides
https://docs.google.com/presentation/d/1qhM0rtXPexERKqjPcmekrI4RPXzZI7qKL4Ng46sPu9I/edit?slide=id.p#slide=id.p