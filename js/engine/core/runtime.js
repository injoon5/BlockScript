BlockScript.runtime = {};

(() => {
    BlockScript.runtime.runFunction = (parsedFunction, scopes=[], parameter={}) => {
        scopes.unshift({})
        let end = false
        let pointer = [0]
        let parsedFunctionCopy = _.cloneDeep(parsedFunction)
        while (!end) {
        }
    }
    BlockScript.runtime.run = (parsedProject) => {
        let globalScope = _.cloneDeep(parsedProject)
        BlockScript.runtime.runFunction(globalScope.main, {}, [globalScope])
    }
})();