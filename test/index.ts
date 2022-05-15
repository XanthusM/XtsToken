import { expect } from "chai";
import { ethers } from "hardhat";
const assert = require('assert');

describe("XtsToken", function () {
  let accounts;
  let owner;
  let user1;
  let user2;

  it("check tokens symbol", async function () {
    const XtsToken = await ethers.getContractFactory("XtsToken");
    const xtsToken = await XtsToken.deploy();
    await xtsToken.deployed();

    expect(await xtsToken.symbol()).to.equal("Xths");
  });


    it("check tokens name", async function () {
      const XtsToken = await ethers.getContractFactory("XtsToken");
      const xtsToken = await XtsToken.deploy();
      await xtsToken.deployed();

      expect(await xtsToken.name()).to.equal("XthsToken");
    });


    it("mint token", async function () {
      const XtsToken = await ethers.getContractFactory("XtsToken");
      const xtsToken = await XtsToken.deploy();
      await xtsToken.deployed();
      

        accounts = await ethers.getSigners();
        owner = accounts[0];
        user1 = accounts[1];
        user2 = accounts[2];
        const mintTx = await xtsToken.mint(owner.address, 200);
        await mintTx.wait();
        expect(await xtsToken.balanceOf(owner.address)).to.equal(200);
      });

    it("burn token", async function () {
      const XtsToken = await ethers.getContractFactory("XtsToken");
      const xtsToken = await XtsToken.deploy();
      await xtsToken.deployed();
        
  
        accounts = await ethers.getSigners();
        owner = accounts[0];
        user1 = accounts[1];
        user2 = accounts[2];
        const mintTx = await xtsToken.mint(owner.address, 200);
        await mintTx.wait();
        expect(await xtsToken.balanceOf(owner.address)).to.equal(200);
        expect(await xtsToken.totalSupply()).to.equal(200);

        const burnTx = await xtsToken.burn(owner.address, 100);
        });

      it("transfer token", async function () {
        const XtsToken = await ethers.getContractFactory("XtsToken");
        const xtsToken = await XtsToken.deploy();
        await xtsToken.deployed();
          
    
          accounts = await ethers.getSigners();
          owner = accounts[0];
          user1 = accounts[1];
          user2 = accounts[2];
          const mintTx = await xtsToken.mint(owner.address, 200);
          await mintTx.wait();
          expect(await xtsToken.balanceOf(owner.address)).to.equal(200);
          expect(await xtsToken.totalSupply()).to.equal(200);
  
          const transferTx = await xtsToken.transfer(user1.address, 100);
          await transferTx.wait();
          expect(await xtsToken.balanceOf(owner.address)).to.equal(100);
          expect(await xtsToken.balanceOf(user1.address)).to.equal(100);
        });
        
      it("approve token", async function () {
          const XtsToken = await ethers.getContractFactory("XtsToken");
          const xtsToken = await XtsToken.deploy();
          await xtsToken.deployed();
          
      
          accounts = await ethers.getSigners();
          owner = accounts[0];
          user1 = accounts[1];
          user2 = accounts[2];
          const mintTx = await xtsToken.mint(owner.address, 200);
          await mintTx.wait();
          expect(await xtsToken.balanceOf(owner.address)).to.equal(200);
          expect(await xtsToken.totalSupply()).to.equal(200);
    
          const approveTx = await xtsToken.approve(owner.address, user1.address, 100);
          await approveTx.wait();
              
        });

        it("transferFrom token", async function () {
          const XtsToken = await ethers.getContractFactory("XtsToken");
          const xtsToken = await XtsToken.deploy();
          await xtsToken.deployed();
              
        
          accounts = await ethers.getSigners();
          owner = accounts[0];
          user1 = accounts[1];
          user2 = accounts[2];
          const mintTx = await xtsToken.mint(owner.address, 1000);
          await mintTx.wait();

          expect(await xtsToken.balanceOf(owner.address)).to.equal(1000);
          expect(await xtsToken.totalSupply()).to.equal(1000);

          const transferTx = await xtsToken.transfer(user1.address, 100);
          await transferTx.wait();
      
          const allowanceTx = await xtsToken.allowance(owner.address, user1.address);
          const approveTx = await xtsToken.approve(user1.address, owner.address, 500);
          await approveTx.wait();


          const transferFromTx = await xtsToken.transferFrom(user1.address, owner.address, 100);
          await transferFromTx.wait();
          
        });


        it("mint token zero address", async function () {
          const {
            constants,
            expectRevert,
          } = require('@openzeppelin/test-helpers');

          const XtsToken = await ethers.getContractFactory("XtsToken");
          const xtsToken = await XtsToken.deploy();
          await xtsToken.deployed();
          
    
          accounts = await ethers.getSigners();
          owner = accounts[0];
          user1 = accounts[1];
          user2 = accounts[2];


        try{
           await xtsToken.mint(constants.ZERO_ADDRESS, 200);({
           from: accounts[0]
               });
               assert(false);
           } catch(err){
               assert(err);
           }
         });


         it("burn token zero address", async function () {
          const {
            constants,
            expectRevert,
          } = require('@openzeppelin/test-helpers');

          const XtsToken = await ethers.getContractFactory("XtsToken");
          const xtsToken = await XtsToken.deploy();
          await xtsToken.deployed();
          
    
          accounts = await ethers.getSigners();
          owner = accounts[0];
          user1 = accounts[1];
          user2 = accounts[2];


        try{
           await xtsToken.burn(constants.ZERO_ADDRESS, 200);({
           from: accounts[0]
               });
               assert(false);
           } catch(err){
               assert(err);
           }
         });


        it("burn exceeds balance", async function () {
          const {
            constants,
            expectRevert,
          } = require('@openzeppelin/test-helpers');

          const XtsToken = await ethers.getContractFactory("XtsToken");
          const xtsToken = await XtsToken.deploy();
          await xtsToken.deployed();
          
    
          accounts = await ethers.getSigners();
          owner = accounts[0];
          user1 = accounts[1];
          user2 = accounts[2];
          const mintTx = await xtsToken.mint(owner.address, 1000);
          await mintTx.wait();

        try{
           await xtsToken.burn(owner.address, 2000);({
           from: accounts[0]
               });
               assert(false);
           } catch(err){
               assert(err);
           }
         });


         it("transferFrom token", async function () {
          const XtsToken = await ethers.getContractFactory("XtsToken");
          const xtsToken = await XtsToken.deploy();
          await xtsToken.deployed();
              
        
          accounts = await ethers.getSigners();
          owner = accounts[0];
          user1 = accounts[1];
          user2 = accounts[2];
          const mintTx = await xtsToken.mint(owner.address, 1000);
          await mintTx.wait();

          expect(await xtsToken.balanceOf(owner.address)).to.equal(1000);
          expect(await xtsToken.totalSupply()).to.equal(1000);

      
          const allowanceTx = await xtsToken.allowance(owner.address, user1.address);
          const approveTx = await xtsToken.approve(user1.address, owner.address, 500);
          await approveTx.wait();


          try{
            await xtsToken.transferFrom(owner.address, user1.address, 100);
            ({
            from: accounts[0]
                });
                assert(false);
            } catch(err){
                assert(err);
            }
          });
          

      it("approve from the zero address", async function () {
            const {
              constants,
              expectRevert,
            } = require('@openzeppelin/test-helpers');
            const XtsToken = await ethers.getContractFactory("XtsToken");
            const xtsToken = await XtsToken.deploy();
            await xtsToken.deployed();
                
          
            accounts = await ethers.getSigners();
            owner = accounts[0];
            user1 = accounts[1];
            user2 = accounts[2];
            const mintTx = await xtsToken.mint(owner.address, 1000);
            await mintTx.wait();
  
            expect(await xtsToken.balanceOf(owner.address)).to.equal(1000);
            expect(await xtsToken.totalSupply()).to.equal(1000);
        
            const allowanceTx = await xtsToken.allowance(owner.address, user1.address);
  
            try{
              await xtsToken.approve(constants.ZERO_ADDRESS, owner.address, 500);
              ({
              from: accounts[0]
                  });
                  assert(false);
              } catch(err){
                  assert(err);
              }
            });

            it("approve to the zero address", async function () {
              const {
                constants,
                expectRevert,
              } = require('@openzeppelin/test-helpers');
              const XtsToken = await ethers.getContractFactory("XtsToken");
              const xtsToken = await XtsToken.deploy();
              await xtsToken.deployed();
                  
            
              accounts = await ethers.getSigners();
              owner = accounts[0];
              user1 = accounts[1];
              user2 = accounts[2];
              const mintTx = await xtsToken.mint(owner.address, 1000);
              await mintTx.wait();
    
              expect(await xtsToken.balanceOf(owner.address)).to.equal(1000);
              expect(await xtsToken.totalSupply()).to.equal(1000);
          
              const allowanceTx = await xtsToken.allowance(owner.address, user1.address);
    
              try{
                await xtsToken.approve(owner.address, constants.ZERO_ADDRESS, 500);
                ({
                from: accounts[0]
                    });
                    assert(false);
                } catch(err){
                    assert(err);
                }
              });


          it("transfer amount exceeds balance", async function () {
              const XtsToken = await ethers.getContractFactory("XtsToken");
              const xtsToken = await XtsToken.deploy();
              await xtsToken.deployed();
                  
            
              accounts = await ethers.getSigners();
              owner = accounts[0];
              user1 = accounts[1];
              user2 = accounts[2];
              const mintTx = await xtsToken.mint(owner.address, 200);
              await mintTx.wait();
              expect(await xtsToken.balanceOf(owner.address)).to.equal(200);
              expect(await xtsToken.totalSupply()).to.equal(200);

              try{
                await await xtsToken.transfer(user1.address, 1000);
                ({
                from: accounts[0]
                    });
                    assert(false);
                } catch(err){
                    assert(err);
                }
              });
            
          it("transfer to the zero address", async function () {
              const {
                constants,
                expectRevert,
              } = require('@openzeppelin/test-helpers');
              const XtsToken = await ethers.getContractFactory("XtsToken");
              const xtsToken = await XtsToken.deploy();
              await xtsToken.deployed();
                    
              
                accounts = await ethers.getSigners();
                owner = accounts[0];
                user1 = accounts[1];
                user2 = accounts[2];
                const mintTx = await xtsToken.mint(owner.address, 200);
                await mintTx.wait();
                expect(await xtsToken.balanceOf(owner.address)).to.equal(200);
                expect(await xtsToken.totalSupply()).to.equal(200);
  
                try{
                 await xtsToken.transfer(constants.ZERO_ADDRESS, 1000);
                  ({
                  from: accounts[0]
                      });
                      assert(false);
                  } catch(err){
                      assert(err);
                  }
            });
                
});
