
export class CrudService{
    private baseUrl;

    constructor(baseUrl: string){
        this.baseUrl = baseUrl
    }

    async createNewItem(newItem: any){
        const response = await fetch(this.baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newItem),
          });
        
          if (!response.ok) {
            throw new Error('Failed to create data');
          }
          
          return await response.json();
    }

    async getAllItems(){
        const response = await fetch(this.baseUrl);
        return await response.json() ?? [];
      
    }

    async getItemById(id: string): Promise<any>{
        const response = await fetch(`${this.baseUrl}/${id}`);
        
        return await response.json();
    }

    async updateById(id: string, newItem:any): Promise<any>{
        const response = await fetch(`${this.baseUrl}/${id}`,{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newItem)
        })
        .then(response => response.json())
        .then(updatedTodo => {
            console.log('Updated todo:', updatedTodo);
        })
        .catch(error => {
            console.error('Error updating todo:', error);
        });

    }

    async deletebyId(id: string){
        const response = await fetch(`${this.baseUrl}/${id}`, {
            method: 'DELETE',
          });
        
          if (!response.ok) {
            throw new Error('Failed to delete data');
          }
    }

}