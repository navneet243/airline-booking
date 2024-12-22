class CrudService{
    constructor(repository){
        this.repository =repository;
    }

    async create(data){
        try {
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
            console.log("something went wrong in crud service")
            throw {error};
        }
    }

    async delete(id){
        try {
            const response = await this.repository.delete(id);
            return response;
        } catch (error) {
            console.log("something went wrong in crud service");
            throw {error};
        }
    }

    async get(id){
        try {
            const response = await this.repository.findByPk(id);
            return response;
        } catch (error) {
            console.log("something went wrong in crud service");
            throw {error};
        }
    }

    async getAll(){
        try {
            const response = await this.repository.findAll();
            return response;
        } catch (error) {
            console.log("something went wrong in crud service");
            throw {error};
        }
    }

    async update(data,id){
        try {
            const response = await this.repository.update(data,id);
            return response;
        } catch (error) {
            console.log("something went wrong in crud service")
            throw {error};
        }
    }
}

module.exports= CrudService;