import {test, expect} from 'bun:test'
import {repeatAdjacent} from './solution'
import {describe} from "test";

function doTest(s, expected) {
    const actual = repeatAdjacent(s)
    console.log(`Testing: "${s}" => ${actual}, expected ${expected}`)
    expect(actual).toBe(expected)
}

describe("repeatAdjacent tests", () => {
    test("sample tests", () => {
        doTest("ccccoodeffffiiighhhhhhhhhhttttttts", 3);
        doTest("soooooldieeeeeer", 0);
        doTest("", 0);
        doTest("aaaa", 0);
        doTest("ccccoooooooooooooooooooooooddee", 1);
        doTest("chaaallengee", 1);
        doTest("wwwwaaaarrioooorrrrr", 2);
        doTest(
            "gztxxxxxggggggggggggsssssssbbbbbeeeeeeehhhmmmmmmmitttttttlllllhkppppp",
            2
        );
    });
});