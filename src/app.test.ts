jest.mock('./global', () => jest.requireActual('./__mocks__/gobal'));
import { app, globalConfigConfigA } from "./app"

describe("app test", () => {
    it("mocked global libA", () => {
        expect(app("test1")).toBe("test1+mockedLibA")
    })
    it("mocked global config", () => {
        expect(globalConfigConfigA).toBe("mockedConfigA");
    })
})