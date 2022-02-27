import { recolacteUserAuth } from "./relocateUserAuth";

test("should return component's name", () => {
  const case1 = recolacteUserAuth({
    check: false,
    component: "home",
    to: "login",
  });
  expect(case1).toStrictEqual("login");

  const case2 = recolacteUserAuth({
    check: true,
    component: "home",
    to: "login",
  });
  expect(case2).toStrictEqual("home");
});
