import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    return <div>Please log in to view your profile.</div>
  }

  return (
    <ProfileContainer>
      <ProfilePicture src={user.picture} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>Joined: {new Date(user.created_at).toLocaleDateString()}</p>
      <LogoutButton onClick={() => logout()}>Log Out</LogoutButton>
    </ProfileContainer>
  )
}

export default Profile

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #222;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`

const LogoutButton = styled.button`
  background-color: #e50914;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b2030f;
  }
`