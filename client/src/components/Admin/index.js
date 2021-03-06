import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import AddBreed from "../AddBreed";
import AddDog from "../AddDog";
import EditDog from "../EditDogAdmin";
import DogsListAdmin from "../DogsListAdmin";
import BreedListAdmin from "../BreedListAdmin";
import UserListAdmin from "../UserListAdmin";
import EditBreed from "../EditBreedAdmin";
import EditUser from "../EditUser";
import DeleteUser from "../DeleteUser";
import AddAdoption from "../AddAdoption";
import UpdateAdoption from "../UpdateAdoption";
import Auth from "../../utils/auth";
import { Redirect } from "react-router-dom";
import AdoptionListAdmin from "../AdoptionListAdmin";


const Admin = () => {

  const [openAddBreed, setopenAddBreed] = useState(false);
  const [openAddAdoption, setopenAddAdoption] = useState(false);
  const [openEditBreed, setopenEditBreed] = useState(false);
  const [openViewBreed, setopenViewBreed] = useState(false);
  const [openViewUser, setopenViewUser] = useState(false);
  const [openEditUser, setopenEditUser] = useState(false);
  const [openEditAdoption, setopenEditAdoption] = useState(false);
  const [openDeleteUser, setopenDeleteUser] = useState(false);
  const [openViewAdoption, setopenViewAdoption] = useState(false);
  const [openAddDog, setopenAddDog] = useState(false);
  const [openEditDog, setopenEditDog] = useState(false);
  const [openViewDog, setopenViewDog] = useState(false);

  if (!Auth.loggedIn() || !Auth.isAdmin()) {
    return <Redirect to="/" />
  }
  return (
    <main id="admin">
      <section className="container">
        <h1>Admin Data Management</h1>
        
      </section>
      
      <section className="container mt-20 container-flex-col">
        <h3>BREEDS</h3>

        <>
          <Button
            onClick={ () => setopenAddBreed(!openAddBreed) }
            aria-controls="example-collapse-text"
            aria-expanded={ openAddBreed }
          >
            Add a Breed
          </Button>
          <Collapse in={ openAddBreed }>
            <div>
              <AddBreed />
            </div>
          </Collapse>
        </>

        <>
          <Button
            onClick={ () => setopenEditBreed(!openEditBreed) }
            aria-controls="example-collapse-text"
            aria-expanded={ openEditBreed }
          >
            Find and/or Edit a Breed
          </Button>
          <Collapse in={ openEditBreed }>
            <div id="example-collapse-text">
              <EditBreed />
            </div>
          </Collapse>
        </>

        <>
          <Button
            onClick={ () => setopenViewBreed(!openViewBreed) }
            aria-controls="example-collapse-text"
            aria-expanded={ openViewBreed }
          >
            View all Breed
          </Button>
          <Collapse in={ openViewBreed }>
            <div id="example-collapse-text">
            <p className="h4 text-center mb-4">View Breeds</p>
              <BreedListAdmin />
            </div>
          </Collapse>
        </>

        <>
          <h3>DOGS</h3>
          <Button
            onClick={ () => setopenAddDog(!openAddDog) }
            aria-controls="example-collapse-text"
            aria-expanded={ openAddDog }
          >
            Add A Dog
          </Button>
          <Collapse in={ openAddDog }>
            <div>
              <AddDog />
            </div>
          </Collapse>
        </>

        <>
          <Button
            onClick={ () => setopenEditDog(!openEditDog) }
            aria-controls="example-collapse-text"
            aria-expanded={ openEditDog }
          >
            Find/Edit/Remove a Dog
          </Button>
          <Collapse in={ openEditDog }>
            <div id="example-collapse-text">
              <EditDog />
            </div>
          </Collapse>
        </>

        <>
          <Button
            onClick={ () => setopenViewDog(!openViewDog) }
            aria-controls="example-collapse-text"
            aria-expanded={ openViewDog }
          >
            View all Dogs
          </Button>
          <Collapse in={ openViewDog }>
            <div id="example-collapse-text">
              <DogsListAdmin />
            </div>
          </Collapse>
        </>

        <h3>ADOPTIONS</h3>

        <>
          <Button
            onClick={ () => setopenAddAdoption(!openAddAdoption) }
            aria-controls="example-collapse-text"
            aria-expanded={ openAddAdoption }
          >
            Add Adoption Details to a Dog
          </Button>
          <Collapse in={ openAddAdoption }>
            <div id="example-collapse-text">
              <AddAdoption />
            </div>
          </Collapse>
        </>
        <>
          <Button
            onClick={ () => setopenEditAdoption(!openEditAdoption) }
            aria-controls="example-collapse-text"
            aria-expanded={ openEditAdoption }
          >
            Find and/or Edit an Adoption
          </Button>
          <Collapse in={ openEditAdoption }>
            <div id="example-collapse-text">
              <UpdateAdoption />
            </div>
          </Collapse>
        </>

        <>
          <Button
            onClick={ () => setopenViewAdoption(!openViewAdoption) }
            aria-controls="example-collapse-text"
            aria-expanded={ openViewAdoption }
          >
            View all Adoptions
          </Button>
          <Collapse in={ openViewAdoption }>
            <div id="example-collapse-text">
              <AdoptionListAdmin />
            </div>
          </Collapse>
        </>


        <h3>USERS</h3>

        <>
          <Button
            onClick={ () => setopenViewUser(!openViewUser) }
            aria-controls="example-collapse-text"
            aria-expanded={ openEditUser }
          >
            View all Users
          </Button>
          <Collapse in={ openViewUser }>
            <div id="example-collapse-text">
              <UserListAdmin />
            </div>
          </Collapse>
        </>

        <>

          <Button
            onClick={ () => setopenEditUser(!openEditUser) }
            aria-controls="example-collapse-text"
            aria-expanded={ openEditUser }
          >
            Find and/or Edit a User
          </Button>
          <Collapse in={ openEditUser }>
            <div id="example-collapse-text">
              <EditUser />
            </div>
          </Collapse>


        </>
        <>
          <Button
            onClick={ () => setopenDeleteUser(!openDeleteUser) }
            aria-controls="example-collapse-text"
            aria-expanded={ openDeleteUser }
          >
            Delete a User
          </Button>
          <Collapse in={ openDeleteUser }>
            <div id="example-collapse-text">
              <DeleteUser />
            </div>
          </Collapse>
        </>
      </section>
    </main>
  );
};

export default Admin;
