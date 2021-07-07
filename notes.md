#### Enhancing Game Item

- item begins at 0.
- item fail count begins at 0.
- item durability begins at 100.
- repairing an item will restore it's durability 10 points at a time until 100.
- item can be enhanced up to 20.
- from 1 to 15 use Arabic numerals.
- from +16 up use Roman numerals (+16 = I, +17 = II, +18 = III, +19 = IV, +20 = V).
- an enhance attempt can succeed or fail.
- when an enhancement fails, the "fail count" of the item is increased according to these rules:
  - from 1 to 15 increase by 1.
  - at I, increase by 2.
  - at II, increase by 3.
  - at III, increase by 4.
  - at IV, increase by 5.
- when enhancement succeeds, the fail count is reset to 0 again.
- when enhancement fails, the durability is decreased by 5.