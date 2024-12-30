import franchiseModel from '../models/franchise.js'

const  createFranchise = async (req, res) => {
    const getId = req.params.id; 
    
    if (req.method === 'POST') {
        try {
            const { Name } = req.body;
            const franchiseDetails = await franchiseModel.create({ Name });
            res.json(franchiseDetails);
        } catch (error) {
            console.error('Error creating franchise:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else if (req.method === 'GET') {
        // GET: Fetch franchise details by ID or all franchises if no ID provided
        try {
            if (getId) {
                const franchise = await franchiseModel.findById(getId);
                if (!franchise) {
                    return res.status(404).json({ message: 'Franchise not found' });
                }
                res.json(franchise);
            } else {
                const franchises = await franchiseModel.find().sort({createdAt:(-1)});
                console.log("fran : ",franchises);
                res.json(franchises);
            }
        } catch (error) {
            console.error('Error fetching franchise:', error);
            res.status(500).json({ message: `The GET error is: ${error}` });
        }
    } else if (req.method === 'PUT') {
        
        try {
            const { Name } = req.body;
            const franchiseUpdate = await franchiseModel.findByIdAndUpdate(
                getId, 
                { Name }, 
                { new: true }  // Returns the updated document
            );
            if (!franchiseUpdate) {
                return res.status(404).json({ message: 'Franchise not found' });
            }
            res.json(franchiseUpdate);
        } catch (error) {
            console.error('Error updating franchise:', error);
            res.status(500).json({ message: `The update error is: ${error}` });
        }
    } else if (req.method === 'DELETE') {
        // DELETE: Delete franchise by ID
        try {
            const franchiseDelete = await franchiseModel.findByIdAndDelete(getId);
            if (!franchiseDelete) {
                return res.status(404).json({ message: 'Franchise not found' });
            }
            res.json({ message: 'Franchise deleted successfully' });
        } catch (error) {
            console.error('Error deleting franchise:', error);
            res.status(500).json({ message: `The delete error is: ${error}` });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};

export default createFranchise;
