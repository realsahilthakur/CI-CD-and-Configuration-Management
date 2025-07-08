const { setup, insertUser, getUsers } = require('./index');

async function runTest() {
  try {
    await setup();
    const user = await insertUser('Alice');
    console.log('Inserted:', user);

    const users = await getUsers();
    console.log('All users:', users);

    if (users.length > 0) {
      console.log('✅ Test Passed');
      process.exit(0);
    } else {
      console.log('❌ Test Failed');
      process.exit(1);
    }
  } catch (err) {
    console.error('❌ Error:', err);
    process.exit(1);
  }
}

runTest();
