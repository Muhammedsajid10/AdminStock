import categoryModel from '../models/category.js'

const createCategory = async (req, res) => {
    const getId = req.params.id; 
    
    if (req.method === 'POST') {
        try {
            const { Name } = req.body;
            const categoryDetails = await categoryModel.create({ Name });
            res.json(categoryDetails);
        } catch (error) {
            console.error('Error creating Category:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else if (req.method === 'GET') {
        // GET: Fetch category details by ID or all categorys if no ID provided
        try {
            if (getId) {
                const category = await categoryModel.findById(getId);
                if (!category) {
                    return res.status(404).json({ message: 'category not found' });
                }
                res.json(category);
            } else {
                const categorys = await categoryModel.find();
                res.json(categorys);
            }
        } catch (error) {
            console.error('Error fetching category:', error);
            res.status(500).json({ message: `The GET error is: ${error}` });
        }
    } else if (req.method === 'PUT') {
        
        try {
            const { Name } = req.body;
            const categoryUpdate = await categoryModel.findByIdAndUpdate(
                getId, 
                { Name }, 
                { new: true }  // Returns the updated document
            );
            if (!categoryUpdate) {
                return res.status(404).json({ message: 'category not found' });
            }
            res.json(categoryUpdate);
        } catch (error) {
            console.error('Error updating category:', error);
            res.status(500).json({ message: `The update error is: ${error}` });
        }
    } else if (req.method === 'DELETE') {
        // DELETE: Delete category by ID
        try {
            const categoryDelete = await categoryModel.findByIdAndDelete(getId);
            if (!categoryDelete) {
                return res.status(404).json({ message: 'category not found' });
            }
            res.json({ message: 'category deleted successfully' });
        } catch (error) {
            console.error('Error deleting category:', error);
            res.status(500).json({ message: `The delete error is: ${error}` });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};

export default createCategory;
