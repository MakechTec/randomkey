export const Id = {
    generate: () => {
        let n = Math.random();
        let n1000 = n * 1000000;
        let rounded = Math.round(n1000);
        return Date.now() + rounded;
    }
};

export default Id;