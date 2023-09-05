package com.petworld.MawandPaw.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection ="store_item")
public class Item {
    // To do - id, item name, description, date (create), quantity, feedback(out of 5),image link(String)
    @Id
    private String id;
}
