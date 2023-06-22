# JSON Web Token Authorization
This problem was recently asked by Microsoft:
<br>
<br>
Given a time in the format of hour and minute, calculate the angle of the hour and minute hand on a clock.
<br>
<br>Starter code:
```
  				+--------+                                           +---------------+
  				|        |--(A)------- Authorization Grant --------->|               |
  				|        |                                           |               |
  				|        |<-(B)----------- Access Token -------------|               |
  				|        |               & Refresh Token             |               |
  				|        |                                           |               |
  				|        |                            +----------+   |               |
  				|        |--(C)---- Access Token ---->|          |   |               |
  				|        |                            |          |   |               |
  				|        |<-(D)- Protected Resource --| Resource |   | Authorization |
  				| Client |                            |  Server  |   |     Server    |
  				|        |--(E)---- Access Token ---->|          |   |               |
  				|        |                            |          |   |               |
  				|        |<-(F)- Invalid Token Error -|          |   |               |
  				|        |                            +----------+   |               |
  				|        |                                           |               |
  				|        |--(G)----------- Refresh Token ----------->|               |
  				|        |                                           |               |
  				|        |<-(H)----------- Access Token -------------|               |
  				+--------+           & Optional Refresh Token        +---------------+
def calcAngle(h, m):
  # Fill this in.

print calcAngle(3, 30)
# 75
print calcAngle(12, 30)
# 165
```
