Dark Pipes is a new way of thinking of secure communications.

When a message is sent over dark pipes anyone can retrieve it. This means in order
to provide any security one can not use the assumption that the message is stored
on a secure server, or only can be retrieved by the intended recipient. 

Q: How do you make your communication NSA proof?
A: Remove the requirement for a secure messenger.


Q: Are drop's unique to one person?
A: No, anyone can use any address.


Q: Can the sender address be the same as the reciever?
A: Absolutely.


Q: So if addresses are not unique how do I know who I am sending a message to?
A: Out of band address exchanges are an option, but the entire point of the dark pipes project is to provide infrastructure for the next generation of secure communication...without dictating protocol. Think of it as just a message relay system.


Api
--------
Note: This is how it will work. the project is not yet usable

`get /{address}`

`post /{address}`

Message structure
```
{
	text:"<message contents>"
	sender:<optional address>
}

```
--------



LICENSE
------------
<pre>
            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.
  </pre>
------------