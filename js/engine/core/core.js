let BlockScript = {}

BlockScript.Block = class {
    constructor (type, template) {
        this.template = template
        this.type = type
    }
    run (args, next, error, variable) {
        next()
    }
}