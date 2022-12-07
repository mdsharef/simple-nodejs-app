const router = require('express').Router();

const {
    getAllContacts,
    createContact,
    getContactById,
    updateContact,
    deleteContact
} = require('./contactControlers');

router.get('/', getAllContacts)

router.post('/', createContact)

router.get('/:id', getContactById)

router.put('/:id', updateContact)

router.delete('/:id', deleteContact)

module.exports = router;