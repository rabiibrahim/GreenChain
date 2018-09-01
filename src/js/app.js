App = {
  web3Provider: null,
  contracts: {},
  contractInstance: null,
  msg: $('.msg'),




  init: function () {
    App.bindEvents();
    return App.initWeb3();
  },

  setMessage: function (text) {
    App.msg.show();
    App.msg.text(text);
    setTimeout(() => {
      App.msg.hide();
    }, 3000);
  },


  bindEvents: function () {
    $('.approve').click(App.approve);
    $('.approve-all').click(App.setApprovalForAll);
    $('.is-approved').click(App.getApproved);
    $('.is-approved-all').click(App.isApprovedForAll);
    $('.balance-btn').click(App.balanceOf);
    $('.is-exist').click(App.exists);
    $('.owner-by-id').click(App.ownerOf);
    $('.transfer-btn').click(App.transferFrom);
    $('.safe-transfer-btn').click(App.safeTransferFrom);
    $('.total-count').click(App.totalSupply);
  },

  /**
   * set the HTTP Provider for the web3 to 
   * use the same network that you deployed your contract to
   */
  initWeb3: function () {
    // Specify default instance if no web3 instance provided
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
    } else {

      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },



  /**
   * use truffle to instantiate the contract
   * save the contract in contract object up ^
   */
  initContract: function () {

    $.getJSON('ERC721Token.json', (data) => {
      // replace me :)
      App.contracts.ERC721Token = TruffleContract(data);
      App.contracts.ERC721Token.setProvider(App.web3Provider);
      return App.createContractInstance();
    });

  },


  /**
   * after instantiating the contract you need to save the deployed instance in contractInstance up^
   * when you get the deployed instance you can interact with the contract by calling the methods via the contract instance.
   */
  createContractInstance() {
    App.contracts.ERC721Token.deployed().then(function (instance) {
      console.log(instance);
      return (App.contractInstance = instance);
    });
  },



  // call the method approve that is located in the smart contract and show msg to the final user;
  approve: function () {
    const key = $("#approve-key").val();
    const id = $("#approve-id").val();
    return App.contractInstance.approve(key, id);
  },







  // call the setApprovalForAll method that is located in the smart contract and show msg to the final user;
  setApprovalForAll: function () {
    const key = $('#approve-all-key').val();
    // replace me :)
  },



  // call the getApproved method that is located in the in smart contract and show msg to the user
  getApproved: function () {
    const id = $('#is-approved-id').val();
    // replace me :)
  },




  // call isApprovedForAll method and show result msg to the final user
  isApprovedForAll: function () {
    const first = $('#is-approved-all-first').val();
    const second = $('#is-approved-all-second').val();
    // replace me :)
  },



  // call balanceOf method and show the balance as message to the final user
  balanceOf: function () {
    const key = $('#balance-key').val();
    // replace me :)
  },




  // call exists method that is located in the smart contract and show message to the final user
  exists: function () {
    const id = $('#exist-id').val();
    // replace me :)
  },






  // call ownerOf method and show message to the final user
  ownerOf: function () {
    const id = $('#owner-id').val();
    // replace me :)
  },




  // call transferFrom method that is located in the smart contract and show message to the final user
  transferFrom: function () {
    const from = $('#transfer-from').val();
    const to = $('#transfer-to').val();
    const id = $('#transfer-id').val();
    // replace me :)
  },



  // call safeTransferFrom method that is located in the smart contract and show message to the final user
  safeTransferFrom: function () {
    const from = $('#safe-transfer-from').val();
    const to = $('#safe-transfer-to').val();
    const id = $('#safe-transfer-id').val();
    // replace me :)
  },





  // call totalSupply method in the smart contract instance and show the result as message to the final user
  totalSupply: function () {
    // replace me :)
  },

};

$(function () {
  $(window).load(function () {
    App.init();
  });
});