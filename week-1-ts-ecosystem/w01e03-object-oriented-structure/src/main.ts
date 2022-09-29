import { Cart } from "./controllers/Cart";
import { AuctionItem } from "./models/AuctionItem";
import { FreeItem } from "./models/FreeItem";
import { NowItem } from "./models/NowItem";

const nowItemCart = new Cart<NowItem>();

const nowItem = new NowItem("Auto", 1, 230000);

const freeItemCart = new Cart<FreeItem>();

const freeItem1 = new FreeItem("Darmowa Książka 1", 1);
const freeItem2 = new FreeItem("Darmowa Książka 2", 6);
const freeItem3 = new FreeItem("Darmowa Książka 3", 9);

const auctionItemCart = new Cart<AuctionItem>();

const auctionItem1 = new AuctionItem("Książka", 1, Date.now() + 10000000, 54);
const auctionItem2 = new AuctionItem("Puszki rybne", 1030, Date.now() + 100000000, 5.51);
const auctionItem3 = new AuctionItem("Samolot", 1, Date.now() + 1000000000, 10000000);
const auctionItem4 = new AuctionItem("Książka 4", 1, Date.now() + 10000000, 54);
const auctionItem5 = new AuctionItem("Książka 5", 1, Date.now() + 10000000, 54);
const auctionItem6 = new AuctionItem("Książka 6", 1, Date.now() + 10000000, 54);
const auctionItem7 = new AuctionItem("Książka 7", 1, Date.now() + 10000000, 54);

//--- Nie można dodać do koszyka normalnego, bo nie spełnia wymagań
//nowItemCart.add(freeItem);
//nowItemCart.add(auctionItem);
//---
nowItemCart.add(nowItem);

//--- Nie można dodać do koszyka darmowych, bo nie spełnia wymagań
//freeItemCart.add(nowItem);
//freeItemCart.add(auctionItem);
//---
freeItemCart.add(freeItem1);
freeItemCart.add(freeItem2);
freeItemCart.add(freeItem3);

//--- Nie można dodać do koszyka aukcji, bo nie spełnia wymagań
//auctionItemCart.add(nowItem);
//auctionItemCart.add(freeItem);
//---
auctionItemCart.add(auctionItem1);
auctionItemCart.add(auctionItem2);
auctionItemCart.add(auctionItem3);
auctionItemCart.add(auctionItem4);
auctionItemCart.add(auctionItem5);
auctionItemCart.add(auctionItem6);
auctionItemCart.add(auctionItem7);

console.log("\x1b[35m--- Informacje o koszyku z aukcjami ---\x1b[0m\n");
auctionItemCart.print();
console.log("\n");

console.log("\x1b[35m--- Zmiana ceny produktu o id:", auctionItem5.id, "i nazwie '", auctionItem5.name, "' ---\x1b[0m\n");
auctionItemCart.updateById(
  auctionItem5.id,
  new AuctionItem(
    auctionItemCart.findById(auctionItem5.id)!.name,
    auctionItemCart.findById(auctionItem5.id)!.amount,
    auctionItemCart.findById(auctionItem5.id)!.time,
    14
  )
);
auctionItemCart.print();
console.log("\n");

console.log("\x1b[35m--- Usunięcie produktu o id:", auctionItem5.id, "i nazwie '", auctionItem5.name, "' ---\x1b[0m\n");
auctionItemCart.removeById(auctionItem5.id);
auctionItemCart.print();
console.log(
  "\n\n---------------------------------------------------------------\n------------------------- KONIEC ------------------------------\n---------------------------------------------------------------\n\n"
);
