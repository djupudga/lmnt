describe('lifecycle.ts', () => {

})

/*

Aim for pure functions as a best practice
conditionals and iterations as components

What is the thing that should be responsible
for loading data?

A functional component gets its model by its
attributes. Should it really be loading stuff
from the outside using hooks? Wouldn't it be
better to have "composable functional components"?
	<UseUsers model="users">
		<UserList users="users" />
	</UseUsers>
	Something like this? (how to stream user list to child?)

or perhaps:
  ComposedUserList = LM.component(() => {
    const users = useUserStream()
    return UserList({users: users.stream()})
  })


*/