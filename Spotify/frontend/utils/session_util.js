// Sign Up
export const createUser = user => (
  $.ajax({
    method: "POST",
    url: '/api/users',
    data: { user }
  })
)

// Sign In
export const createSession = user => (
  $.ajax({
    method: "POST",
    url: '/api/session',
    data: { user }
  })
);

// Sign Out
export const deleteSession = () => (
  $.ajax({
    method: "DELETE",
    url: '/api/session'
  })
);