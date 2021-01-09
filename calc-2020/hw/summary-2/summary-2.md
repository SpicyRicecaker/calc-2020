# Summary 2: Prisoners, Rooms, and Light-switches (Pure Math/Games)
- By Scott Duke Kominers, Harvard University and Daniel Kane, from University of California, San Diego

## Motivation
- Built on previous talk where there is one light switch in a room and 100 prisoners. The warden randomly chooses a prisoner each day, and a prisoner has to declare that all of them have visited the room.

## Findings
- s = 2
  - One leader, other prisoners start out inactive
  - If they see `on on`, they become active
    - Flip room to `on off`
      - No other prisoner can become active
    - All rooms to `on off`
      - Make other rooms the same
      - You can then be sure that you visited every room
    - All rooms to `off off`
    - All rooms to `on off`
    - All rooms to `off off`
    - One room to `off on`
      - Leader looks for `off on`, flips room to `on on`, 
        - After doing this `n-1` times? and doing active prisoner exercise

- `n-1` distinct instances of the switch being on
- `r` indestinguishable rooms, `n` prisoners led in and out of rooms, each prisoner in each room `k` times

- Could just straight up encode room labels, prisoner names, and visit counts, finite
  - 
- Could have unary operators, each prisoner has their own count
  - r + n * k
- Use one room solution k times in each, label rooms
  - r + 1
- label rooms in binary
  - log2(r) + 1
- one active room at a time, 3 switches
  - 3
  - leader declares one room as active, play the previous game, declare room as finished
## Possible Research Issues
  - S = 1 is not enough
  - 2 switch = 4 states, 1 switch = 2 states
    - Three states enough or no

  - Starting config
    - Unknown = bad
    - Prisoners identical strategies
## Conclusion Drawn
  - Means that 2 suffices 
    - Could do 1 room with s - 1

## Next steps
  - Algorithm efficiency 
    - One room at time good for small rooms
    - Large room bad

## Math

## Intersting Things and Questions
- Prisoners don't have to do the exact same thing
  - Algorithm not needed
  - A leader can be declared

## What you may study in future

## Other

# Raw Notes


