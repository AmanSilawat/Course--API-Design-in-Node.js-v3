const { Router } = require('express');
const { me, updateMe } = require('./user.controllers');

const router = Router()

router.get('/', me)
router.put('/', updateMe)

// export default router
exports.default = router;