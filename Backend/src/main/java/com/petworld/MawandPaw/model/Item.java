package com.petworld.MawandPaw.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection ="store_item")
public class Item {
    // To do - id, item name, description, date (create), quantity, feedback(out of 5),image link(String)
    @Id
    @Indexed(unique = true)
    private String id;
    private String itemName;
    private String itemDescription;
    private LocalDateTime date;
    private Double feedback;
    private String imageLink;
}
