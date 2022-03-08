export const globalConfig = {
    configA: "mockedConfigA"
};
export const globalLibA = jest.fn((msg) => {
    return msg + "+mockedLibA"
});